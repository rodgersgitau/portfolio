<script lang="ts">
	import '../app.postcss';

	import Navigation from '$lib/components/Navigation.svelte';
</script>

<main
	class="h-full min-h-screen p-0 m-0 text-black bg-base min-w-screen dark:bg-black dark:text-base"
>
	<section
		class="relative w-full h-full p-8 bg-right bg-no-repeat bg-ascii-pattern-dark dark:bg-ascii-pattern bg-blend-overlay"
	>
		<div class="container relative flex flex-col w-full h-full gap-10 px-2 mx-auto md:px-8">
			<div class="absolute z-10 hidden md:block -top-4 -left-4">
				<img
					alt=""
					width={100}
					height={100}
					src="/images/corner_top_left.svg"
					class="inline-block w-12 h-12"
				/>
			</div>
			<div class="absolute z-10 hidden md:block -bottom-4 -right-4">
				<img
					alt=""
					width={100}
					height={100}
					src="/images/corner_bottom_right.svg"
					class="inline-block w-12 h-12"
				/>
			</div>

			<Navigation />

			<div class="flex-1 w-full h-full xl:px-8">
				<slot />
			</div>

			<footer
				class="flex flex-col w-full gap-8 px-8 text-black md:flex-row md:items-center md:gap-20 dark:text-base"
			>
				<p>&copy; Copyright {new Date().getFullYear()}</p>
				<div class="flex items-center gap-1">
					<!-- <FaPhoneSquareAlt fontSize="1.25rem" /> -->
					<span>+254 759085920</span>
				</div>
				<div class="flex items-center gap-1">
					<!-- <FaEnvelopeSquare fontSize="1.25rem" /> -->
					<span>rodgersgitau@gmail.com</span>
				</div>
			</footer>
		</div>
	</section>
</main>
