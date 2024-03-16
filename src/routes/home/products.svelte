<script>
import bolring from '$lib/images/products/9.png'
import molring from '$lib/images/products/6.png'
import kripang from '$lib/images/products/7.png'
import basreng from '$lib/images/products/8.png'
import siebol from '$lib/images/products/10.png'
import bg from '$lib/images/bg-kertas.png'
	import _ from 'lodash';

	const products = [
		{
			name: 'BOLRING',
			longName: 'BOLED KERING',
			description:
				'keripik khas terbuat dari olahan ubi di campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: 'https://shp.ee/iyjpc6z',
            img: bolring
		},
		{
			name: 'MOLRING',
			longName: 'CIMOL KERING',
			description:
				'keripik khas terbuat dari olahan aci di campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: 'https://shp.ee/bk7fqgx',
            img: molring
		},
		{
			name: 'KRIPANG',
			longName: 'KERIPIK PANGSIT',
			description:
				'keripik khas terbuat dari TEPUNG ADONAN PANGSIT campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: 'https://shp.ee/boe0bvf',
            img: kripang
		},
		{
			name: 'BASRENG',
			longName: 'BAKSO GORENG',
			description:
				'keripik khas terbuat dari olahan bakso ikan di campur dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: 'https://shp.ee/dtbbpf7',
            img: basreng
		},
		{
			name: 'SIEBOL',
			longName: 'SISTIK ENAK BOLED',
			description:
				'keripik khas terbuat dari olahan tepung gandum berbentuk stik dengan bumbu buatan sendiri yang gurih dan nikmat',
			link: 'https://shp.ee/wh06qpo',
            img: siebol
		}
	];
</script>

<section class="flex flex-col items-center text-secondary pb-20 pt-10 font-londrina bg-cover max-lg:pt-5" id="products" style="background-image: url({bg});">
    <div class="space-y-10 py-20 flex flex-col items-center justify-center max-lg:space-y-5 max-lg:py-10">
        <h1 class="text-5xl text-center max-lg:text-3xl">TERSEDIA 5 VARIANT DENGAN 3 TINGKAT KEPEDASAN</h1>
        <div class="flex justify-evenly w-full text-2xl max-lg:text-xl max-lg:w-5/6">
            <p>ORIGINAL</p>
            <p>PEDAS</p>
            <p>EXTRA PEDAS</p>
        </div>
    </div>
    {#each products as product, index}
    <div class="flex justify-center w-2/3 max-lg:w-full">
        <img
            src={product.img}
            alt=""
            class="aspect-square object-cover w-72 max-lg:w-1/3"
        />
        <div class="flex flex-col justify-evenly w-full max-lg:pr-5 max-lg:my-5">
            <h6 class="text-5xl max-lg:text-3xl">
                {product.name} <span class="align-middle text-xl">/{product.longName}</span>
            </h6>
            <p class="text-xl max-lg:text-base">
                {product.description.toUpperCase()}
            </p>
            <div class="flex space-x-4 items-center max-lg:space-x-2 max-lg:mt-2">
                <p class="text-xl max-lg:text-lg">{"Beli disini: ".toUpperCase()}</p>
                <a href={product.link} class="p-1 bg-secondary hover:bg-primary rounded-full font-daruma"
                    ><img src="https://i.pinimg.com/originals/77/7d/c8/777dc8f47b66af05caff4015d5f416d8.png" alt="shopee logo" class="h-8 max-lg:h-6"></a
                >
                <a href="https://wa.me/6281224549094?text=Halo%20kak%2C%20mau%20beli%20cemilan%20{_.capitalize(product.name)}" class="p-2 bg-secondary hover:bg-primary  rounded-full font-daruma"
                    ><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png" alt="shopee logo" class="h-4"></a
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
</section>

<style>
</style>
