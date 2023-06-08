<script lang="ts">
	import PageHeader from '$lib/components/Page/PageHeader.svelte';

	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="blog">
	<PageHeader pageTitle={data.frontmatter.title} pageDescription={data.frontmatter.description} />
	<div
		class="prose blog-content prose-headings:text-xl prose-headings:capitalize prose-headings:text-current prose-li:text-current prose-a:no-underline prose-a:text-current hover:prose-a:underline hover:prose-a:text-primary"
	>
		<svelte:component this={component} />
	</div>
</div>

<style scoped lang="postcss">
	.blog {
		@apply flex flex-col w-full h-full gap-10 p-8 shadow border rounded-md border-zinc-300 bg-zinc-100/30 dark:border-zinc-600 dark:bg-black/30;
	}
	.blog-content {
		@apply !max-w-full p-8 mx-auto text-current;
	}
</style>
