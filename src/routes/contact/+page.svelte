<script lang="ts">
	import { enhance } from '$app/forms';

	interface MessageType {
		type: 'info' | 'success' | 'error';
		text: string;
	}

	let message: MessageType | undefined = undefined;

	const inputs = [
		{
			type: 'text',
			name: 'contact',
			label: 'Your Name',
			required: true,
			placeholder: 'e.g Rodgers M Gitau'
		},
		{
			type: 'text',
			name: 'company',
			label: 'Company',
			required: false,
			placeholder: 'e.g Top Brand Limited'
		},
		{
			type: 'tel',
			name: 'phoneNumber',
			label: 'Phone Number',
			required: false,
			placeholder: 'e.g +254712345678'
		},
		{
			type: 'email',
			name: 'email',
			label: 'Email',
			required: true,
			placeholder: 'e.g rodgersgitau@example.com'
		}
	];
	const alertStyling = (type: MessageType['type']) => {
		switch (type) {
			case 'error':
				return 'bg-pink-100 text-pink-900';
			case 'success':
				return 'bg-emerald-100 text-emerald-900';
			default:
				return 'bg-pink-100 text-black';
		}
	};
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="overflow-y-auto h-full w-90 md:w-[45vw] mx-auto">
	<h1 class="text-xl font-black text-black dark:text-gray-400">
		Leave some details and I will reach out ...
	</h1>
	{#if message}
		<div
			class={`${alertStyling(message.type)} w-full px-4 py-2.5 flex items-center gap-8 rounded-md`}
		>
			<p class="flex-1 text-sm font-semibold">{message.text}</p>
			<button
				on:click={() => {
					message = undefined;
				}}
				class="text-lg font-semibold bg-transparent"
			>
				x
			</button>
		</div>
	{/if}
	<form
		use:enhance
		method="POST"
		action="?/submitMessage"
		name="RGitauContactForm"
		class="flex flex-col flex-1 w-full h-full gap-5 py-4 md:grid md:gap-10 md:grid-cols-2"
	>
		<p class="hidden">
			<label id="contact-form-bot-label">
				Don't fill this out if you're human:{' '}
				<input name="bot-field" aria-labelledby="contact-form-bot-label" />
			</label>
		</p>

		{#each inputs as { name, label, required, ...rest }}
			<div
				class="relative z-0 flex flex-col-reverse w-full gap-2 text-sm text-black group dark:text-gray-400"
			>
				<input
					{...rest}
					id={name}
					{name}
					{required}
					class="py-2.5 px-0 w-full bg-transparent placeholder:text-gray-600 dark:placeholder:text-gray-500 appearance-none border-0 border-b-2 border-gray-600 dark:border-gray-300 focus:border-pink-600 dark:focus:border-pink-600 focus:outline-none focus:ring-0 peer"
				/>
				<label for={name} class="text-sm font-semibold peer-focus:text-pink-500">
					<div class="flex items-center gap-1">
						<span>{label}</span>
						{#if required}
							<sup>*</sup>
						{/if}
					</div>
				</label>
			</div>
		{/each}

		<div
			class="relative z-0 flex flex-col-reverse w-full col-span-2 gap-3 text-sm text-black group dark:text-gray-400"
		>
			<textarea
				rows={8}
				id="message"
				name="message"
				maxLength={300}
				placeholder="e.g I liked your portfolio and would like to discuss working on a project"
				class="p-2.5 w-full rounded-md bg-transparent placeholder:text-gray-600 dark:placeholder:text-gray-500 appearance-none border-2 border-gray-600 dark:border-gray-300 focus:border-pink-600 focus:outline-none focus:ring-0 peer"
			/>
			<label for="message" class="text-sm font-semibold peer-focus:text-pink-500">
				Your Message
			</label>
		</div>
		<button
			type="submit"
			class="col-span-2 text-white bg-black/75 dark:bg-pink-600/75 hover:bg-black dark:hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:opacity-100"
		>
			Request For Callback
		</button>
	</form>
	<small class="text-xs text-right text-black dark:text-gray-500"> * Required Fields </small>
</div>
