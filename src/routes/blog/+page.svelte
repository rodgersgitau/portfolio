<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="min-h-[65vh] h-max overflow-y-auto">
	<h1 class="font-sans text-4xl font-bold leading-loose">Stories and Exploration</h1>

	<ul class="links">
		{#each data.posts as post}
			<li>
				<a href={`blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
</div>
