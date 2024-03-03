<script>
    /** @type {import('./$types').LayoutData} */
    import "../app.css";
	import Nav from "./nav.svelte";
    import Footer from './footer.svelte'
    import '@fontsource/darumadrop-one';
    import '@fontsource/barlow-condensed';
</script>

<div class="w-screen">
    <Nav/>
    <slot/>
    <Footer/>
</div>