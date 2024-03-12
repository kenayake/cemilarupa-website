<script>
import bolring from '$lib/images/products/9.png'
import molring from '$lib/images/products/6.png'
import kripang from '$lib/images/products/7.png'
import basreng from '$lib/images/products/8.png'
import siebol from '$lib/images/products/10.png'
import bg from '$lib/images/bg-kertas.png'

	const products = [
		{
			name: 'BOLRING',
			longName: 'BOLED KERING',
			description:
				'keripik khas terbuat dari olahan ubi di campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: '/',
            img: bolring
		},
		{
			name: 'MOLRING',
			longName: 'CIMOL KERING',
			description:
				'keripik khas terbuat dari olahan aci di campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: '/',
            img: molring
		},
		{
			name: 'KRIPANG',
			longName: 'KERIPIK PANGSIT',
			description:
				'keripik khas terbuat dari TEPUNG ADONAN PANGSIT campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: '/',
            img: kripang
		},
		{
			name: 'BASRENG',
			longName: 'BAKSO GORENG',
			description:
				'keripik khas terbuat dari olahan bakso ikan di campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: '/',
            img: basreng
		},
		{
			name: 'SIEBOL',
			longName: 'SISTIK ENAK BOLED',
			description:
				'keripik khas terbuat dari olahan tepung gandum berbentuk stik dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: '/',
            img: siebol
		}
	];
</script>

<div class="flex flex-col items-center text-secondary pb-20 pt-10 font-londrina object-bottom" id="products" style="background-image: url({bg});object-position: bottom;">
    <div class="space-y-10 py-20 flex flex-col items-center">
        <p class="text-5xl">TERSEDIA 5 VARIANT DENGAN 3 TINGKAT KEPEDASAN</p>
        <div class="flex justify-evenly w-full text-2xl">
            <p>ORIGINAL</p>
            <p>PEDAS</p>
            <p>EXTRA PEDAS</p>
        </div>
    </div>
    {#each products as product, index}
    <div class="flex  justify-center w-2/3">
        <img
            src={product.img}
            alt=""
            class="aspect-square object-cover h-72"
        />
        <div class="flex flex-col justify-evenly w-full">
            <h6 class="text-5xl ">
                {product.name} <span class="align-middle text-xl">/{product.longName}</span>
            </h6>
            <p class="text-xl">
                {product.description.toUpperCase()}
            </p>
            <div class="flex space-x-4 items-center">
                <p class="text-xl">{"Beli disini: ".toUpperCase()}</p>
                <a href={product.link} class="p-2 bg-secondary text-tertiary rounded-full font-daruma"
                    ><img src="https://i.pinimg.com/736x/77/7d/c8/777dc8f47b66af05caff4015d5f416d8.jpg" alt="shopee logo" class="h-8"></a
                >
                <a href={product.link} class="p-2 bg-secondary text-tertiary rounded-full font-daruma"
                    ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="shopee logo" class="h-8"></a
                >
            </div>
        </div>
    </div>
        <!-- {#if index % 2 === 0}
        {:else}
            <div class="flex px-20 font-londrina justify-center w-3/4">
                <div class="flex flex-col justify-evenly text-right items-end">
                    <h6 class="text-5xl"><span class="align-middle text-xl">{product.longName}/</span> {product.name}</h6>
                    <p class="text-xl">
                        {product.description.toUpperCase()}
                    </p>
                    <div class=" flex space-x-4">
                        <a href={product.link} class="p-2 bg-secondary text-tertiary rounded-full font-daruma"
                            ><img src="https://i.pinimg.com/736x/77/7d/c8/777dc8f47b66af05caff4015d5f416d8.jpg" alt="shopee logo" class="h-8"></a
                        >
                        <a href={product.link} class="p-2 bg-secondary text-tertiary rounded-full font-daruma"
                            ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="shopee logo" class="h-8"></a
                        >
                    </div>
                </div>
                <img
                    src={product.img}
                    alt=""
                    class="h-72 aspect-square object-cover"
                />
            </div>
        {/if} -->
    {/each}
</div>

<style>
</style>
