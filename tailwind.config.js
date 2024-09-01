/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'light-background': '#fff',
				'light-primary': '#7E74F1',
				'light-text': '#232E35',
				'light-label': '#717070',
				'light-project-background': '#f1f1f1',
				'light-button-background': '#d4d9db',
				'dark-background': '#1E1E1E',
				'dark-primary': '#7e74f1da',
				'dark-text': '#fff',
				'dark-label': '#929292',
				'dark-project-background': '#181A1B',
				'dark-button-background': '#202324',
			},

			backgroundImage: {
				'hero-image': "url('/assets/hero-profile.avif')",
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				jakarta: ['var(--font-jakarta)'],
			},
		},
	},
	plugins: [],
};
