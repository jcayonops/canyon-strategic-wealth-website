export interface Review {
  // The reviewer's name as it should appear on the site. Use the form the
  // client has consented to — full name, first name + last initial, or initials.
  name: string;
  // The review text, quoted from the client's review. Do not edit its substance.
  text: string;
  // Star rating, a whole number from 1 to 5.
  rating: number;
  // Where the review was originally posted, e.g. 'Google'.
  source: string;
}

// ─────────────────────────────────────────────────────────────────────
// CLIENT REVIEWS — to be populated by Jake.
//
// Add 3-5 reviews from clients who have CONSENTED to appear on the website.
// Every entry here is a testimonial under the SEC Marketing Rule, so:
//   - Use only reviews from clients who have given permission.
//   - Do not edit the substance of the review text.
//   - These must be uncompensated: no cash or non-cash compensation given in
//     exchange for the review. The on-page disclosure states this. If any
//     review WAS compensated, the disclosure must change — flag it first.
//
// The Reviews section renders nothing while this array is empty, so it is
// safe to ship empty and fill in later.
//
// Example entry:
//   {
//     name: 'A.B.',
//     text: 'Working with Canyon changed how we think about our finances...',
//     rating: 5,
//     source: 'Google',
//   },
// ─────────────────────────────────────────────────────────────────────
export const reviews: Review[] = [];
