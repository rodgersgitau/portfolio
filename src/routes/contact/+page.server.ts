import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import { fail } from '@sveltejs/kit';

const schema = z.object({
	contact: z
		.string({ required_error: 'Contact is required' })
		.min(2)
		.max(64, { message: 'Contact must be less than 64 characters' })
		.trim(),
	phoneNumber: z
		.string()
		.max(14, { message: 'PhoneNumber must be less than 14 characters' })
		.optional(),
	company: z
		.string()
		.max(64, { message: 'Contact must be less than 64 characters' })
		.trim()
		.optional(),
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.max(64, { message: 'Name must be less than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
	message: z
		.string({ required_error: 'Message is required' })
		.min(5, { message: 'Message must be at least 5 characters' })
		.trim()
});

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
};

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};
