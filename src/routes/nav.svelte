<script>
	import logo from '$lib/images/logo.png';
</script>

<nav class="grid grid-cols-10 w-full bg-primary font-daruma">
	<div class="col-span-2">
		<div class="p-3 pr-8 rounded-e-full w-max bg-secondary">
			<img src={logo} alt="camilarupa logo" class="aspect-auto max-w-32" />
		</div>
	</div>
	<div class="col-span-6 flex justify-evenly items-center text-tertiary text-2xl ">
		<a href="#hero" class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary">Home</a>
		<a href="#products" class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary">Produk</a>
		<a href="#tentang-kami" class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary">Tentang Kami</a>
		<a href="#hubungi-kami" class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary">Hubungi Kami</a>
	</div>
	<div class="col-span-2" />
</nav>