<script>
    import "../app.css";
    import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
    import OrientationPopup from '$lib/components/OrientationPopup.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={'true'}>
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400..800&display=swap" rel="stylesheet">
</svelte:head>

<ThemeInitializer />
<OrientationPopup />

<slot />
