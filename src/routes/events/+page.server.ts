import { CONFIG } from '$lib/config';
import { readCalendarEvents } from '$lib/events';

export async function load({ fetch }) {
	const today = new Date().toISOString().slice(0, 10).replaceAll('-', '');

	try {
		const response = await fetch(CONFIG.events.calendarIcalLink);
		const events = response.ok ? readCalendarEvents(await response.text()) : [];
		return {
			upcoming: events.filter((event) => event.start >= today).slice(0, 15),
			past: events.filter((event) => event.start < today).reverse().slice(0, 6)
		};
	} catch {
		return { upcoming: [], past: [] };
	}
}
