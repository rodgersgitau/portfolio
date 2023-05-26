<script lang="ts">
	import demos from '$lib/data/play.json';
</script>

<svelte:head>
	<title>Play</title>
</svelte:head>

<section class="w-full text-black dark:text-white">
	<div class="container py-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each demos as project}
				<div class="overflow-hidden relative group h-[17rem] shadow-sm shadow-current rounded-lg">
					<img
						alt="gallery"
						src={project.image}
						class="block object-cover object-top w-full h-full rounded-lg aspect-square"
					/>
					<div
						class="-translate-y-[17rem] absolute inset-0 transition-all rounded-lg group-hover:translate-y-0 text-white bg-black/80"
					>
						<div class="flex flex-col items-center justify-between gap-8 p-8 font-serif">
							<h1 class="text-2xl font-black uppercase lg:text-3xl">
								{project.name}
							</h1>
							<h5 class="leading-tight text-center">
								{project.description}
							</h5>
							<div class="flex items-center gap-8 mx-auto w-max">
								{#if project.link}
									<a
										target="_blank"
										href={project.link}
										rel="noopener noreferrer nofollow"
										class="rounded btn btn-primary btn-group"
									>
										<div class="flex items-center gap-4 font-semibold capitalize">
											<span>Play</span>
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
													class="feather feather-play-circle"
													><circle cx="12" cy="12" r="10" /><polygon
														points="10 8 16 12 10 16 10 8"
													/></svg
												>
											</span>
										</div>
									</a>
								{/if}
								{#if project.repository}
									<a
										target="_blank"
										href={project.repository}
										rel="noopener noreferrer nofollow"
										class="!text-white rounded btn-secondary btn btn-outline btn-group"
									>
										<div class="flex items-center gap-4 font-semibold capitalize">
											<span>Repository</span>
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
													class="feather feather-github"
													><path
														d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
													/></svg
												>
											</span>
										</div>
									</a>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
