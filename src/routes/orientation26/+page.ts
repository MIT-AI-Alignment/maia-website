import { redirect } from '@sveltejs/kit';

// Short link printed on the Orientation 2026 banner QR code (aialignment.mit.edu/orientation26).
// Change the target here to repoint the QR code later.
export const prerender = true;

export function load() {
	throw redirect(302, '/orientation-2026');
}
