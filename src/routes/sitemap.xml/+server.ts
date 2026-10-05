import type { RequestHandler } from './$types';

export const prerender = true;

// Public evergreen pages; campaign redirects and experimental routes are omitted.
const paths = [
	'/', '/about/', '/getinvolved/', '/hermes/', '/events/', '/initiatives/', '/resources/',
	'/resources/mit-classes/', '/resources/faculty-labs/', '/resources/fellowships/',
	'/aisf/', '/aisf/summer-2026/fellows/'
];

export const GET: RequestHandler = () => new Response(
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `\n  <url><loc>https://mitaialignment.org${path}</loc></url>`).join('')}\n</urlset>`,
	{ headers: { 'Content-Type': 'application/xml' } }
);
