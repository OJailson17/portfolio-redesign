import { extendTheme } from '@chakra-ui/react';

export const lightTheme = extendTheme({
	colors: {
		background: '#fff',
		primary: '#7E74F1',
		text: '#232E35',
		label: '#656D72',
		projectBackground: '#f1f1f1',
		buttonBackground: '#d4d9db',
	},

	styles: {
		global: {
			html: {
				scrollBehavior: 'smooth',
			},
			body: {
				fontFamily: "'Inter', sans-serif",
			},
		},
	},
});

export const darkTheme = extendTheme({
	colors: {
		background: '#1E1E1E',
		primary: '#7E74F1',
		text: '#fff',
		label: '#787e82',
		projectBackground: '#181A1B',
		buttonBackground: '#202324',
	},

	styles: {
		global: {
			html: {
				scrollBehavior: 'smooth',
			},
			body: {
				fontFamily: "'Inter', sans-serif",
				background: 'background',
			},
			a: {
				color: 'text',
			},
			scrollbars: {
				background: 'red',
			},
		},
	},
});
