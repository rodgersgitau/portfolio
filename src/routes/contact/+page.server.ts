import { fail } from '@sveltejs/kit';

export const actions = {
	// submitMessage: async ({ request }: { request: Request }) => {
	// 	const formData = Object.fromEntries(await request.formData());
	// 	if (!formData) {
	// 		return fail(400, { formData, missing: true });
	// 	}
	// 	try {
	// 		const result = contactSchema.parse(formData);
	// 		emailjs.sendForm()
	// 		SGMail.setApiKey(SENDGRID_API_KEY);
	// 		const response = await SGMail.send({
	// 			html: emailHtml,
	// 			subject: `${formData['contact']} wrote you a message`,
	// 			from: 'rodgers.gitau@gmail.com',
	// 			to: 'rodgers.gitau@gmail.com'
	// 		});
	// 		return { success: true, data: response };
	// 	} catch (error: any) {
	// 		const { fieldErrors: errors } = error.flatten();
	// 		return fail(400, { errors, missing: true });
	// 	}
	// }
};

export async function load() {
	return {};
}
