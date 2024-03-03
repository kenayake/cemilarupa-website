<script>
    import banner from '$lib/images/1.png'
    import '@fontsource/barlow-condensed';
</script>

<div class="bg-primary grid grid-cols-2 px-20 pb-20">
	<div class="flex flex-col justify-around">
		<div class="space-y-5">
			<h1 class="text-2xl font-Barlow font-extrabold">Welcome to Camilarupa</h1>
			<h1 class="text-8xl text-tertiary dilo">Cemilan Enak Urang Pajambon</h1>
			<h1 class="text-2xl font-Barlow font-extrabold">Dijamin bikin nagihh!</h1>
		</div>
		<a
			href="/"
			class="p-3 px-6 text-3xl w-fit bg-secondary text-tertiary rounded-full ml-1 hover:bg-tertiary hover:text-secondary"
			>Beli Sekarang!</a
		>
	</div>
    <img src={banner} alt="banner">
</div>

<style lang="postcss">
	@font-face {
		font-family: DiloWorld;
		src: url('$lib/fonts/DiloWorld.ttf');
	}

	.dilo {
		font-family: DiloWorld;
	}
</style>
