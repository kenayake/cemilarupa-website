<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';
	import '@fontsource/darumadrop-one';
	import '@fontsource/barlow-condensed/400.css';
	import '@fontsource/barlow-condensed/700.css';
    import '@fontsource/londrina-solid';
</script>

<div class="w-screen">
	<Nav />
	<slot />
	<Footer />
</div>
