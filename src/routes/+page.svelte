<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Rodgers M Gitau Portfolio" />
</svelte:head>

<div class="h-full min-h-[60vh] flex flex-col items-center justify-center">
	<div class="grid items-center justify-center grid-cols-1 gap-8 md:grid-cols-2">
		<div class="flex flex-col justify-center w-full h-full row-start-2 gap-8 md:row-start-1">
			<h1 class="flex flex-col items-center gap-4 font-semibold md:flex-row">
				<span class="text-3xl">Hello, I&apos;m</span>
				<span
					class="relative inline-block p-1 px-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black before:dark:bg-pink-500 before:rounded-md"
				>
					<span class="relative mx-auto text-2xl text-white"> Rodgers M Gitau </span>
				</span>
			</h1>
			<div class="flex flex-col gap-8 text-lg text-gray-800 dark:text-gray-400">
				<p>
					I&apos;m a full-stack software engineer based in Nairobi, Kenya. For the past 7+ years,
					I&apos;ve designed, developed &amp; shipped all sorts of web applications for a myriad of
					industries i.e hospitality, real estate, ecommerce &amp; healthcare
				</p>
				<p>
					I&apos;m fascinated with cutting-edge, pixel-perfect, beautiful interfaces and intuitively
					implemented UX.
				</p>
			</div>

			<a
				class="w-48 text-current transition-colors btn btn-outline btn-group hover:bg-primary hover:text-white hover:border-primary"
				download="Rodgers Gitau's CV"
				href="./downloads/Rodgers M Gitau CV.pdf"
			>
				<div class="flex items-center gap-6">
					<span>Download CV</span>
					<span class="w-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-file"
							><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline
								points="13 2 13 9 20 9"
							/></svg
						>
					</span>
				</div>
			</a>
		</div>
		<div class="flex items-center justify-end col-start-1 row-start-1 md:col-start-2">
			<div class="w-[20rem] md:w-[30rem]">
				<svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<mask id="image-mask" type="alpha">
						<path
							fill="#E8DAFF"
							d="M46.7,-73.3C60.2,-64,70.7,-50.5,77.8,-35.4C84.8,-20.3,88.5,-3.5,86.4,12.6C84.3,28.7,76.6,44.2,65.8,57.5C55,70.9,41.2,82.1,25.5,86.8C9.7,91.5,-8,89.6,-24.6,84.4C-41.1,79.2,-56.6,70.8,-66.8,58.3C-77,45.7,-81.9,29.1,-84.3,12.2C-86.7,-4.8,-86.5,-22.1,-80.8,-37.9C-75.1,-53.7,-64,-67.9,-49.6,-76.8C-35.2,-85.7,-17.6,-89.2,-0.5,-88.4C16.6,-87.6,33.2,-82.5,46.7,-73.3Z"
							transform="translate(100 100)"
						/>
					</mask>
					<g mask="url(#image-mask)">
						<path
							fill="#E8DAFF"
							d="M46.7,-73.3C60.2,-64,70.7,-50.5,77.8,-35.4C84.8,-20.3,88.5,-3.5,86.4,12.6C84.3,28.7,76.6,44.2,65.8,57.5C55,70.9,41.2,82.1,25.5,86.8C9.7,91.5,-8,89.6,-24.6,84.4C-41.1,79.2,-56.6,70.8,-66.8,58.3C-77,45.7,-81.9,29.1,-84.3,12.2C-86.7,-4.8,-86.5,-22.1,-80.8,-37.9C-75.1,-53.7,-64,-67.9,-49.6,-76.8C-35.2,-85.7,-17.6,-89.2,-0.5,-88.4C16.6,-87.6,33.2,-82.5,46.7,-73.3Z"
							transform="translate(100 100)"
						/>
						<image href="/images/me.jpg" width="100%" height="100%" />
					</g>
				</svg>
			</div>
		</div>
	</div>
</div>
