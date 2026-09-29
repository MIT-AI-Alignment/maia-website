import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(308, '/aisf-su26/week0/');
}
