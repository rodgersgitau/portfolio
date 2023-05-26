import { SENDGRID_API_KEY } from '$env/static/private';
import contactEmail from '$lib/emails/contact.svelte';
import { render } from 'svelte-email';

import * as SGMail from '@sendgrid/mail';
import { fail } from '@sveltejs/kit';

export const actions = {
	submitMessage: async ({ request }: { request: Request }) => {
		const formData = await request.formData();

		if (!formData) {
			return fail(400, { formData, missing: true });
		}

		try {
			const formValues = Object.fromEntries(formData);
			const emailHtml = await render({
				template: contactEmail,
				props: {
					contact: formValues['contact'] ? String(formValues['contact']) : undefined,
					company: formValues['company'] ? String(formValues['company']) : undefined,
					phoneNumber: formValues['phoneNumber'] ? String(formValues['phoneNumber']) : undefined,
					email: formValues['email'] ? String(formValues['email']) : undefined,
					message: formValues['message'] ? String(formValues['message']) : undefined
				}
			});
			SGMail.setApiKey(SENDGRID_API_KEY);
			const emailMessage = {
				html: emailHtml,
				subject: `${formValues['contact']} wrote you a message`,
				from: 'rodgers.gitau@gmail.com',
				to: 'rodgers.gitau@gmail.com'
			};
			await SGMail.send(emailMessage).then(() => ({
				success: true
			}));
		} catch (error) {
			return fail(400, { formData, missing: true });
		}

		return { success: true };
	}
};

export async function load() {
	return {};
}
