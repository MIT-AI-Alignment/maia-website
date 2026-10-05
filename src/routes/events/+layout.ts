// Vercel ISR reconstructs __pathname without a trailing slash. Requiring one
// redirects every HTML regeneration back to itself; accept both Events URLs.
export const trailingSlash = 'ignore';
