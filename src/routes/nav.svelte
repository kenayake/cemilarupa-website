<script>
	import logo from '$lib/images/logo.png';
	
	let checked = false

	$: console.table(checked)
</script>

<header class="flex justify-between items-center w-full bg-primary font-daruma relative rotate-0 z-20">
	<div class="z-50">
		<div class="p-3 pr-8 rounded-e-full w-max bg-secondary">
			<img src={logo} alt="camilarupa logo" class="aspect-auto max-w-32 max-lg:w-24" />
		</div>
	</div>
	<div class="flex space-x-10 items-center text-tertiary text-2xl max-lg:hidden">
		<a
			href="#hero"
			class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
			>Home</a
		>
		<a
			href="#products"
			class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
			>Produk</a
		>
		<a
			href="#tentang-kami"
			class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
			>Tentang Kami</a
		>
		<a
			href="#hubungi-kami"
			class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
			>Hubungi Kami</a
		>
	</div>
	<div class="max-lg:hidden lg:w-32" />
	<div class="pr-6 lg:hidden">
		<label class="relative z-30 cursor-pointer px-3 py-6" for="mobile-menu">
			<input class="peer hidden" type="checkbox" id="mobile-menu" bind:checked={checked} on:click={()=>checked = !checked}/>
			<div
				class="relative z-50 block h-[3px] rounded-full before:rounded-full after:rounded-full w-7 bg-black content-[''] before:absolute before:-top-2 before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:-bottom-2 after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"
			/>
			<div
				class="fixed z-40 top-0 inset-x-0 w-screen -translate-y-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0"
			>
				<div class="float-right min-h-full w-full bg-primary px-6 shadow-2xl pt-24 z-30">
					<div class="flex space-y-2 items-end text-tertiary text-2xl flex-col justify-center pb-5 z-30">
						<a
							href="#hero"
							on:click={()=>checked = !checked}
							class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
							>Home</a
						>
						<a
							href="#products"
							on:click={()=>checked = !checked}
							class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
							>Produk</a
						>
						<a
							href="#tentang-kami"
							on:click={()=>checked = !checked}
							class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
							>Tentang Kami</a
						>
						<a
							href="#hubungi-kami"
							on:click={()=>checked = !checked}
							class="bg-secondary rounded-full w-fit px-5 py-1 hover:text-secondary hover:bg-tertiary"
							>Hubungi Kami</a
						>
					</div>
				</div>
			</div>
		</label>
	</div>
</header>
