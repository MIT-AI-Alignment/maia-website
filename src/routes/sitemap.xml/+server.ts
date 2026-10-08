import type { RequestHandler } from './$types';

export const prerender = true;

// Public content pages only; campaign redirects and the demo blog are omitted.
const paths = [
	'/', '/about/', '/getinvolved/', '/hermes/', '/events/', '/events/semester/', '/initiatives/', '/resources/',
	'/resources/mit-classes/', '/resources/faculty-labs/', '/resources/fellowships/',
	'/resources/merch/', '/donate/',
	'/initiatives/caip-exhibition/', '/initiatives/caip-exhibition/phone-lines/',
	'/initiatives/caip-exhibition/strategic-deception/', '/initiatives/spring-workshops/',
	'/aisf/', '/aisf/week0/', '/aisf/week1/', '/aisf/summer-2026/fellows/',
	...['spring-2026', 'summer-2026'].flatMap(semester => [
		`/aisf/${semester}/`,
		...Array.from({ length: 9 }, (_, week) => `/aisf/${semester}/week${week}/`)
	])
];

export const GET: RequestHandler = () => new Response(
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `\n  <url><loc>https://mitaialignment.org${path}</loc></url>`).join('')}\n</urlset>`,
	{ headers: { 'Content-Type': 'application/xml' } }
);
