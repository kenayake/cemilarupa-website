<script>
	import banner from '$lib/images/1.png';
</script>

<div class="bg-primary grid grid-cols-2 h-[90vh] relative" id="home">
	<div class="divider-vertical">
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
		</svg>
	</div>
	<div class="flex flex-col justify-around ml-20">
		<div class="space-y-5">
			<h1 class="text-4xl">Welcome to Camilarupa</h1>
			<h1 class="text-8xl text-tertiary dilo">Cemilan Enak Urang Pajambon</h1>
			<h1 class="text-4xl">Dijamin bikin nagihh!</h1>
		</div>
		<a
			href="/"
			class="p-3 px-6 text-4xl font-daruma w-fit bg-secondary text-tertiary rounded-full ml-1 hover:bg-tertiary hover:text-secondary"
			>Beli Sekarang!</a
		>
		<div></div>
	</div>
	<img src={banner} alt="banner" class="p-10 pr-20" /></div>

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
