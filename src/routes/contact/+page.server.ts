import { SENDGRID_API_KEY } from '$env/static/private';
import contactEmail from '$lib/emails/contact.svelte';
import { render } from 'svelte-email';
import { z, ZodAny, ZodError } from 'zod';

import * as SGMail from '@sendgrid/mail';
import { fail } from '@sveltejs/kit';

const contactSchema = z.object({
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
	submitMessage: async ({ request }: { request: Request }) => {
		const formData = Object.fromEntries(await request.formData());

		if (!formData) {
			return fail(400, { formData, missing: true });
		}

		try {
			const result = contactSchema.parse(formData);
			const emailHtml = render({
				template: contactEmail,
				props: {
					...result,
					company: result.company ? result.company : '',
					phoneNumber: result.phoneNumber ? result.phoneNumber : ''
				}
			});
			SGMail.setApiKey(SENDGRID_API_KEY);
			const response = await SGMail.send({
				html: emailHtml,
				subject: `${formData['contact']} wrote you a message`,
				from: 'rodgers.gitau@gmail.com',
				to: 'rodgers.gitau@gmail.com'
			});
			return { success: true, data: response };
		} catch (error: any) {
			const { fieldErrors: errors } = error.flatten();
			return fail(400, { errors, missing: true });
		}
	}
};

export async function load() {
	return {};
}
