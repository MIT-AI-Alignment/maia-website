export type CalendarEvent = {
	title: string;
	start: string;
	description?: string;
	location?: string;
};

function valueFor(event: string, property: string) {
	return event.match(new RegExp(`^${property}(?:;[^:]*)?:(.*)$`, 'm'))?.[1];
}

function clean(value?: string) {
	return value
		?.replace(/\\n/g, ' ')
		.replace(/\\,/g, ',')
		.replace(/\\;/g, ';')
		.replace(/\\\\/g, '\\')
		.replace(/<[^>]*>/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

export function readCalendarEvents(calendar: string): CalendarEvent[] {
	return calendar
		.replace(/\r?\n[ \t]/g, '')
		.split('BEGIN:VEVENT')
		.slice(1)
		.map((event) => {
			const start = valueFor(event, 'DTSTART')?.slice(0, 8);
			return {
				title: clean(valueFor(event, 'SUMMARY')) ?? '',
				start: start ?? '',
				description: clean(valueFor(event, 'DESCRIPTION')),
				location: clean(valueFor(event, 'LOCATION'))
			};
		})
		.filter((event) => event.title && event.start)
		.sort((a, b) => a.start.localeCompare(b.start));
}

export function displayDate(value: string) {
	const date = new Date(`${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}T00:00:00Z`);
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	}).format(date);
}
