<script lang="ts">
	export let title: string;
</script>

<div
	class="px-8 py-4 mt-16 mb-8 text-current border border-t-8 rounded-md shadow-2 bg-secondary/25 border-t-zinc-700"
>
	<div class="my-4">
		<strong class="font-semibold text-black"> {title}</strong>
	</div>

	<slot />
</div>
