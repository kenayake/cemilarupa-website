<script>
	import clock from '$lib/images/contact/clock.svg';
	import location from '$lib/images/contact/location.svg';
	import wa from '$lib/images/social/whatsapp-icon.png';
</script>

<section
	class="flex flex-col items-center p-5 font-londrina text-tertiary lg:p-20 lg:flex-row lg:justify-between lg:space-x-10"
	id="hubungi-kami"
>
	<div class="text-xl space-y-5">
		<h1 class="text-3xl text-center lg:text-left">HUBUNGI KAMI</h1>
		<div>
			<div class="flex items-center mb-2">
				<img src={location} alt="location icon" class="w-4 aspect-square" />
				<p class="">&nbsp;LOKASI</p>
			</div>
			<p class="text-black font-sans text-base">
				Dusun Jl. Pahing, RT.03/RW.02, Pajambon, Kec. Kramatmulya, Kabupaten Kuningan, Jawa Barat
				45553
			</p>
		</div>
		<div class="border-b" />
		<div class="flex lg:space-x-8 lg:items-center max-lg:justify-center max-lg:flex-col ">
			<div class="max-lg:mb-2">
				<div class="flex items-center mb-2">
					<img src={clock} alt="clock icon" class="w-5 aspect-square" />
					<p class="">&nbsp;JAM OPERASIONAL</p>
				</div>
				<p class="text-black font-sans text-base">Offline: Rabu - Kamis, 8AM - 3PM</p>
				<p class="text-black font-sans text-base">Online: Senin - Jumat, 8AM - 5PM</p>
			</div>
			<div class="flex lg:space-x-2 max-lg:space-x-2 max-lg:mb-5">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
					alt="instagram icon"
                    class="w-20 max-lg:w-8"
				/>
				<img
					src="https://static-00.iconduck.com/assets.00/tik-tok-icon-1024x1024-zwq641op.png"
					alt="tiktok icon"
                    class="w-20 max-lg:w-8"
				/>
				<img
					src={wa}
					alt="whatsapp icon"
                    class="w-20 max-lg:w-8"
				/>
			</div>
		</div>
	</div>
	<iframe
		title="Cemilarupa maps"
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1152.2617884353497!2d108.45612633255458!3d-6.938481361261077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f17238f26ee3f%3A0x2a34fb02697b44d3!2sCemilarupa!5e0!3m2!1sen!2sid!4v1710563172209!5m2!1sen!2sid"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		allowfullscreen
		class="w-full aspect-[4/3] lg:w-[600px]"
	/>
</section>
