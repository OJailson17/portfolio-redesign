import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			html: {
				scrollBehavior: 'smooth',
			},
			body: {
				fontFamily: "'Inter', sans-serif",
				background: '#fff',
			},
		},
	},
});
