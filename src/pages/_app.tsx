import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Head from 'next/head';

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
					name='twitter:description'
					content='Desenvolvedor Frontend Júnior. Apaixonado por tecnologia, especialmente programação. Focado em crescer e se desenvolver na área de Desenvolvimento Web. - OJailson17'
				></meta>
				<meta
					name='twitter:title'
					content='Jailson de Oliveira | Portfólio'
				></meta>
				<meta name='twitter:site' content='@ojailson17'></meta>

				<meta
					property='og:site_name'
					content='Jailson de Oliveira | Portfólio'
				></meta>
				<meta
					property='og:image'
					content='https://github.com/OJailson17.png'
				></meta>
				<meta property='og:type' content='website'></meta>
				<meta
					property='og:url'
					content='https://jailsondeoliveira.vercel.app'
				></meta>
				<meta
					property='og:title'
					content='Jailson de Oliveira | Portfólio'
				></meta>
				<meta
					property='og:image:alt'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				></meta>
				<meta
					name='description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta
					property='og:description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				></meta>

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
