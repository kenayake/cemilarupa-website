<script>
	import banner from '$lib/images/1.png';
</script>

<section class="bg-primary grid grid-cols-2 relative max-lg:grid-cols-1 max-lg:text-center max-lg:py-5" id="home">
	<div class="flex flex-col justify-around lg:ml-20 max-lg:items-center">
		<div class="lg:space-y-5 space-y-2">
			<h1 class="text-2xl lg:text-[2.25vw] lg:leading-none">Welcome to Cemilarupa</h1>
			<h1 class="text-6xl lg:text-[6.5vw] lg:leading-none text-tertiary dilo">Cemilan Enak Urang Pajambon</h1>
			<h1 class="text-2xl lg:text-[2.25vw]  lg:leading-none">Dijamin bikin nagihh!</h1>
		</div>
		<a
			href="#products"
			class="max-lg:mt-10 p-3 px-6 text-[2.25vw] max-lg:text-2xl leading-none font-daruma w-fit bg-secondary text-tertiary rounded-full lg:ml-1 hover:bg-tertiary hover:text-secondary"
			>Beli Sekarang!</a
		>
		<div></div>
	</div>
	<img src={banner} alt="banner" class="lg:p-10 lg:pr-20 max-lg:pt-5" />
</section>

<style>
	@font-face {
		font-family: DiloWorld;
		src: url('/fonts/DiloWorld.ttf');
	}

	.dilo {
		font-family: DiloWorld, sans-serif;
	}

	.divider-vertical {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.divider-vertical svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 48px;
	}

	.divider-vertical .shape-fill {
		fill: transparent;
	}
</style>
