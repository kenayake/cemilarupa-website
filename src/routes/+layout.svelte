<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';
	import '@fontsource/darumadrop-one';
	import '@fontsource/barlow-condensed/400.css';
	import '@fontsource/barlow-condensed/700.css';
	import '@fontsource/londrina-solid';

	export const prerender = true;
</script>

<svelte:head>
	<title>Cemilarupa: Cemilan Enak Urang Pajambon</title>
	<meta
		name="description"
		content="Menjual cemilan-cemilan khas pajambon seperti basreng (bakso goreng), bolring (bolet kering), molring (cimol kering), kripang (kripik pangsit) dan siebol (sistik enak boled), dengan bumbu khas yang enak dan lezat."
	/>
</svelte:head>

<div class="max-w-screen">
	<Nav />
	<slot />
	<Footer />
</div>
