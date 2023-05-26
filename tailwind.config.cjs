/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				base: '#E8E9EB',
				black: '#1d1d20',
				greyish: '#79746d'
			},
			backgroundImage: {
				'ascii-pattern': "url('/images/ascii-pattern.svg')",
				'ascii-pattern-dark': "url('/images/ascii-pattern-dark.svg')"
			},
			gridTemplateColumns: {
				'fit-25': 'repeat(auto-fit, minmax(25rem, 1fr))',
				'fill-25': 'repeat(auto-fill, minmax(25rem, 1fr))'
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#D73E97',
					secondary: '#1d1d20',
					accent: '#79746d'
				}
			},
			'lofi',
			'corporate'
		]
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
