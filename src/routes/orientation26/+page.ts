import { redirect } from '@sveltejs/kit';
import { CONFIG } from '$lib/config';

// Short link printed on the Orientation 2026 banner QR code (aialignment.mit.edu/orientation26).
// Points at the interest form: submitting it is what unlocks merch at orientation events.
// Change CONFIG.orientation.interestFormLink to repoint the QR code later.
export const prerender = true;

export function load() {
	throw redirect(302, CONFIG.orientation.interestFormLink);
}
