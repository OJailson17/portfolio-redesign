import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../context/themeContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
}
