import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeContextProvider } from '../context/themeContext';
import * as gtag from '../utils/gtag';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta name='author' content='Jailson de Oliveira'></meta>
				<meta
					name='keywords'
					content='Desenvolvedor Web, Desenvolvedor frontend, Frontend, Javascript, React, NextJs, Typescript, Programador, Utinga, Bahia'
				></meta>

				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='theme-color' content='#ffffff' />
			</Head>

			<ThemeContextProvider>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</>
	);
}
