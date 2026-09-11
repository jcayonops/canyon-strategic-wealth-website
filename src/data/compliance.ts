// ─────────────────────────────────────────────────────────────────────────────
// Regulatory / disclosure language — SINGLE SOURCE OF TRUTH.
//
// Portside is the registered investment adviser; Canyon Strategic Wealth is
// not. Every regulatory statement on the site reads from this file so the
// firm relationship is stated one way in one place.
//
// ⚠️  FIELDS MARKED `TODO` ARE UNVERIFIED PLACEHOLDERS.
//     Confirm with compliance (Isaac Huether) before this goes live.
// ─────────────────────────────────────────────────────────────────────────────

/** Legal name of the registered investment adviser. */
// TODO(compliance): confirm exact legal entity name, incl. suffix (LLC / Inc.).
export const RIA_NAME = 'Portside Wealth Group, LLC';

/** Trade name this website operates under. */
export const FIRM_NAME = 'Canyon Strategic Wealth';

/**
 * How the two entities relate, as one sentence.
 * TODO(compliance): confirm the correct construction. Common forms:
 *   - "<FIRM> is a DBA of <RIA>."
 *   - "<FIRM> is an independent firm; its advisors are investment adviser
 *      representatives of <RIA>."
 */
export const ADVISORY_SERVICES_LINE =
  `Advisory services are offered through ${RIA_NAME}, a Registered Investment Adviser. ` +
  `${FIRM_NAME} is a DBA of ${RIA_NAME}.`;

/**
 * Website disclosure supplied by compliance (Word doc attached to the
 * 2026-08-20 review email). Rendered verbatim at the bottom of every page.
 * TODO(compliance): paste the approved text. Until then the footer falls back
 * to ADVISORY_SERVICES_LINE plus the standard risk language.
 */
export const WEBSITE_DISCLOSURE = '';

/**
 * Salesforce-hosted disclosure documents. These must be reachable in ONE click
 * from the front page (compliance requirement), so they render in the footer,
 * which appears on every page.
 * TODO(compliance): replace each empty string with the Salesforce link.
 * Any entry left empty is omitted from the footer rather than rendered broken.
 */
export const DISCLOSURE_DOCS: {
  label: string;
  /** Salesforce URL. Empty until compliance supplies it. */
  href: string;
  /** Interim destination used only while `href` is empty. Empty = hide the link. */
  fallback: string;
}[] = [
  { label: 'Form ADV', href: '', fallback: '' },          // TODO Salesforce link
  { label: 'Form CRS', href: '', fallback: '' },          // TODO Salesforce link
  { label: 'Privacy Policy', href: '', fallback: '/privacy' }, // TODO Salesforce link
];

/** Docs that actually have somewhere to point right now. */
export const resolvedDisclosureDocs = () =>
  DISCLOSURE_DOCS.map((d) => ({ label: d.label, href: d.href || d.fallback })).filter(
    (d) => d.href !== ''
  );

/** Standard risk/informational language that accompanies the disclosure. */
export const STANDARD_RISK_LANGUAGE =
  'Registration does not imply a certain level of skill or training. This website is for ' +
  'informational purposes only and does not constitute financial, tax, or legal advice. ' +
  'Past performance is not indicative of future results. Investing involves risk, including ' +
  'the possible loss of principal.';
