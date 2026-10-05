<script lang="ts">
	import { page } from '$app/stores';
	import PageLayout from '../components/PageLayout.svelte';
	import Button from '../components/Button.svelte';
	$: missing = $page.status === 404;
	$: title = missing ? 'Page not found' : 'Something went wrong';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<PageLayout {title} description={title} heroTitle={title}>
	<section aria-label="Error details" class="max-w-2xl pb-12">
		<p class="font-mono text-sm mb-4">{missing ? '404' : 'Request unavailable'}</p>
		<p class="text-lg mb-8">
			{missing
				? 'This page may have moved or is no longer available. You can return home or explore MAIA events.'
				: 'We couldn’t load this page right now. Please try again in a moment, or return to the homepage.'}
		</p>
		<div class="flex flex-wrap gap-4">
			<Button href="/" text="Back to home" />
			<Button href="/events/" text="Explore events" type="text" />
		</div>
	</section>
</PageLayout>
