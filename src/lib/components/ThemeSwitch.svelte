<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	let theme = darkMode ? 'dark' : 'light';

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		if (darkMode) {
			theme = 'dark';
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			theme = 'light';
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
		}
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<!-- <div>
	<input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
	<label for="theme-toggle" />
</div> -->
<button
	class="px-4 py-2 bg-transparent border-2 border-black rounded-md w-max dark:border-gray-200"
	on:click={handleSwitchDarkMode}
>
	<div class="flex items-center gap-4 dark:text-white">
		{#if theme === 'light'}
			<div class="w-6 h-6">
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
					class="feather feather-sun"
					><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
						x1="12"
						y1="21"
						x2="12"
						y2="23"
					/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
						x1="18.36"
						y1="18.36"
						x2="19.78"
						y2="19.78"
					/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
						x1="4.22"
						y1="19.78"
						x2="5.64"
						y2="18.36"
					/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
				>
			</div>
		{:else}
			<div class="w-6 h-6">
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
					class="feather feather-moon"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			</div>
		{/if}
		{#if theme === 'light'}
			<span class="flex-1 font-semibold"> Light </span>
		{:else}
			<span class="flex-1 font-semibold"> Dark </span>
		{/if}
	</div>
</button>
