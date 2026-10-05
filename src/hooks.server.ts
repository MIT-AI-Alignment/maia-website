import type { Handle, HandleServerError } from '@sveltejs/kit';

const calendarRoute = (id: string | null) => id === '/events' || id === '/events/semester';

export const handleError: HandleServerError = ({ event, error }) => {
  if (calendarRoute(event.route.id)) event.locals.calendarRenderFailed = true;
  console.error('Server render failed', event.route.id, error);
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  // SvelteKit data requests encode load errors inside HTTP 200 responses.
  // ISR must see failure, for both HTML and data, to retain last-good content.
  if (event.locals.calendarRenderFailed) {
    const headers = new Headers(response.headers);
    headers.set('Cache-Control', 'no-store');
    return new Response(response.body, { status: 503, headers });
  }
  return response;
};
