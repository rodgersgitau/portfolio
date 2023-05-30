<script lang="ts">
	import PageHeader from '$lib/components/Page/PageHeader.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="w-full min-h-[65vh] h-max overflow-y-auto flex flex-col gap-10">
	<PageHeader
		pageTitle="Blogsphere"
		pageDescription="Random musings on interesting technology, solutions and idea explorations"
	/>
	<ul class="flex flex-col max-w-full divide-y divide-current shadow-lg">
		{#each data.posts as post}
			<li class="w-full px-8 py-4 bg-[whitesmoke]/80 dark:bg-black/80">
				<div class="flex flex-col gap-4">
					<h3 class="flex flex-col gap-2 xl:justify-between xl:flex-row">
						<span class="font-sans text-lg font-semibold capitalize">{post.title}</span>
						<span>{new Date(post.date).toDateString()}</span>
					</h3>
					<h4 class="text-sm font-normal capitalize">{post.description}</h4>
					<a
						class="self-end !text-white w-max btn-secondary dark:btn-outline dark:hover:!bg-zinc-700 btn btn-sm"
						href={`blog/${post.slug}`}
						>View
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
