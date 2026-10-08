<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;

	// Use one public URL for slash variants and tracking queries, including ISR pages.
	$: pathname = $page.url.pathname === '/' ? '/' : `${$page.url.pathname.replace(/\/+$/, '')}/`;
	$: canonical = `https://mitaialignment.org${pathname}`;
	$: pageTitle = `MAIA - ${title}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link rel="canonical" href={canonical} />
	<meta name="description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>
