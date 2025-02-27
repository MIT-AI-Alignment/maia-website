<script>
    import "../app.css";
    import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={'true'}>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>

<ThemeInitializer />

<slot />