/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		// "./app/**/*.{js,ts,jsx,tsx,mdx}",
		// "./pages/**/*.{js,ts,jsx,tsx,mdx}",
		// "./components/**/*.{js,ts,jsx,tsx,mdx}",
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#1E1E1E',
				primary: '#7E74F1',
				text: '#fff',
				label: '#787e82',
				projectBackground: '#181A1B',
				buttonBackground: '#202324',
			},
			backgroundImage: {
				'hero-image': "url('/assets/hero-profile_1.avif')",
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				jakarta: ['var(--font-jakarta)'],
			},
		},
	},
	plugins: [],
};
