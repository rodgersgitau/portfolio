<script lang="ts">
	export let pageTitle: string = 'Untitled Page';
	export let pageDescription: string = '';
</script>

<header
	class="w-full min-h-[10vh] shadow border rounded-md border-zinc-300 p-8 bg-zinc-100/30 dark:border-zinc-600 dark:bg-black/30"
>
	<div class="flex flex-col items-center gap-10 xl:flex-row">
		<div class="flex flex-col justify-center gap-6 xl:w-2/3">
			<h1 class="text-xl font-medium leading-4 capitalize lg:text-2xl">
				{pageTitle}
			</h1>
			<h4 class="text-lg font-medium text-zinc-600 dark:text-zinc-400">{pageDescription}</h4>
		</div>

		<!-- Subscription form -->
		<form on:submit|preventDefault class="w-full xl:w-1/3">
			<div class="flex flex-col gap-4">
				<input
					id="email"
					type="email"
					name="email"
					class="placeholder-gray-400 dark:placeholder-black input input-secondary placeholder:capitalize"
					placeholder="Enter your email"
				/>

				<button type="submit" class="text-white btn btn-secondary dark:bg-zinc-700 btn-group">
					<div class="flex items-center gap-4">
						<span class="w-4 h-auto">
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
								class="feather feather-mail"
								><path
									d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
								/><polyline points="22,6 12,13 2,6" /></svg
							>
						</span>
						<span class="leading-snug capitalize">Subscribe to newsletter</span>
					</div>
				</button>
			</div>
		</form>
	</div>
</header>
