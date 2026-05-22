// Canyon Strategic Wealth - lead-capture handler
//
// Receives submissions from the website contact form and the guide-download
// form, emails the inquiry to Jake via Resend, and (when configured) posts a
// notification to Slack. No external dependencies - uses the Node global fetch.
//
// Environment variables (Vercel - Settings - Environment Variables):
//   RESEND_API_KEY     required - Resend API key for sending email
//   SLACK_WEBHOOK_URL  optional - Slack Incoming Webhook URL for notifications

const TO_EMAIL = 'jake@canyonstrategicwealth.com';
const FROM_EMAIL = 'Canyon Strategic Wealth <noreply@canyonstrategicwealth.com>';

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email) {
  return typeof email === 'string' &&
    email.length <= 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // Vercel parses JSON bodies automatically; guard against a string body.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (err) { body = {}; }
  }
  body = body || {};

  // Honeypot: the hidden "company" field is invisible to humans. If it is
  // filled, treat the submission as a bot and silently accept it.
  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const isGuide = body.formType === 'guide';

  const email = String(body.email || '').trim();
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const firstName = String(body.firstName || '').trim();
  const lastName = String(body.lastName || '').trim();
  const fullName = [firstName, lastName].filter(Boolean).join(' ');
  const phone = String(body.phone || '').trim();
  const topic = String(body.topic || '').trim();
  const message = String(body.message || '').trim();

  if (!isGuide && (!fullName || !message)) {
    return res.status(400).json({ error: 'Please complete the required fields.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return res.status(500).json({
      error: 'The form is temporarily unavailable. Please email jake@canyonstrategicwealth.com.'
    });
  }

  const heading = isGuide ? 'New guide download' : 'New website inquiry';
  const subject = isGuide
    ? 'New guide download - ' + email
    : 'New website inquiry' + (fullName ? ' from ' + fullName : '');
  const received = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }) + ' MT';

  const fields = [
    ['Form', isGuide ? 'Family Wealth Coordination Checklist (guide download)' : 'Contact form'],
    ['Name', fullName],
    ['Email', email],
    ['Phone', phone],
    ['Topic', topic],
    ['Message', message],
    ['Received', received]
  ].filter(function (f) { return f[1]; });

  const rowsHtml = fields.map(function (f) {
    return '<tr>' +
      '<td style="padding:6px 16px 6px 0;color:#6B7C93;font-size:13px;vertical-align:top;white-space:nowrap;">' + escapeHtml(f[0]) + '</td>' +
      '<td style="padding:6px 0;color:#2C3E50;font-size:14px;white-space:pre-wrap;">' + escapeHtml(f[1]) + '</td>' +
      '</tr>';
  }).join('');

  const html = '<!doctype html><html><body style="margin:0;background:#F5F7FA;padding:24px;font-family:Arial,Helvetica,sans-serif;">' +
    '<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">' +
    '<div style="background:#1B3A5C;padding:18px 24px;">' +
    '<p style="margin:0;color:#ffffff;font-size:16px;font-weight:bold;">Canyon Strategic Wealth</p>' +
    '<p style="margin:2px 0 0;color:#7EC8E3;font-size:12px;">' + escapeHtml(heading) + '</p>' +
    '</div>' +
    '<div style="padding:20px 24px;"><table style="width:100%;border-collapse:collapse;">' + rowsHtml + '</table></div>' +
    '</div></body></html>';

  const text = fields.map(function (f) { return f[0] + ': ' + f[1]; }).join('\n');

  try {
    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: subject,
        html: html,
        text: text
      })
    });
    if (!resendResp.ok) {
      const detail = await resendResp.text();
      console.error('Resend API error', resendResp.status, detail);
      return res.status(502).json({
        error: 'We could not send your message right now. Please email jake@canyonstrategicwealth.com.'
      });
    }
  } catch (err) {
    console.error('Resend request failed', err);
    return res.status(502).json({
      error: 'We could not send your message right now. Please email jake@canyonstrategicwealth.com.'
    });
  }

  // Optional Slack notification - sent only when SLACK_WEBHOOK_URL is set.
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (slackWebhook) {
    try {
      await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: ':bell: *' + heading + '*\n' +
            fields
              .filter(function (f) { return f[0] !== 'Form' && f[0] !== 'Received'; })
              .map(function (f) { return '*' + f[0] + ':* ' + f[1]; })
              .join('\n')
        })
      });
    } catch (err) {
      console.error('Slack notification failed (non-fatal)', err);
    }
  }

  return res.status(200).json({ ok: true });
};
