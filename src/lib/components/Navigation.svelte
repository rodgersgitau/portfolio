<script>
	import ThemeSwitch from './ThemeSwitch.svelte';

	const routes = [
		{ path: '/', pathname: 'Home' },
		// { path: "/work", pathname: "Work" },
		{ path: '/play', pathname: 'Playground' },
		{ path: '/contact', pathname: 'Contact' }
	];
</script>

<nav
	class="sticky l-0 t-0 h-max w-full min-h-[7rem] flex flex-col md:flex-row items-center gap-10 px-8"
>
	<div class="flex-1">
		<div class="flex items-center gap-8 w-max">
			{#each routes as route}
				<a
					href={route.path}
					class="font-semibold underline transition-all ease-out underline-offset-8 hover:text-pink-600 hover:translate-y-1"
				>
					{route.pathname}
				</a>
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-between gap-8">
		<div class="w-max">
			<a href="/contact">
				<span
					class="px-4 py-3 text-base font-semibold capitalize transition-all ease-out bg-black rounded-md dark:bg-base dark:text-black hover:text-black hover:bg-pink-300 hover:translate-y-1"
				>
					Let's Talk
				</span>
			</a>
		</div>
		<div class="w-max">
			<ThemeSwitch />
		</div>
	</div>
</nav>
