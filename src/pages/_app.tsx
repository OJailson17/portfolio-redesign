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
				<meta name='author' content='Jailson de Oliveira' />
				<meta
					name='keywords'
					content='Desenvolvedor Web, Desenvolvedor frontend, Frontend, Javascript, React, NextJs, Typescript, Programador, Utinga, Bahia'
				/>

				<meta name='title' content='Jailson de Oliveira | Portfólio' />
				<meta
					name='description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta
					property='og:site_name'
					content='Jailson de Oliveira | Portfólio'
				/>

				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://jailsondeoliveira.vercel.app'
				/>
				<meta property='og:title' content='Jailson de Oliveira | Portfólio' />
				<meta
					property='og:description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta
					property='og:image'
					content='https://jailsondeoliveira.vercel.app/api/og'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='563' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://jailsondeoliveira.vercel.app'
				/>
				<meta
					property='twitter:title'
					content='Jailson de Oliveira | Portfólio'
				/>
				<meta
					property='twitter:description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta
					property='twitter:image'
					content='https://jailsondeoliveira.vercel.app/api/og'
				/>

				{/* 
				<meta
					property='og:image'
					content='https://ik.imagekit.io/jayllson/profile-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672802968432'
				/>
				<meta
					property='og:image:secure_url'
					content='https://ik.imagekit.io/jayllson/profile-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672802968432'
				/>
				<meta property='og:image:type' content='image/jpg' />
				<meta property='og:image:width' content='400' />
				<meta property='og:image:height' content='300' />
				<meta
					property='og:image:alt'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://jailsondeoliveira.vercel.app'
				/>
				<meta property='og:title' content='Jailson de Oliveira | Portfólio' />
				<meta
					name='description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>
				<meta
					property='og:description'
					content='Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.'
				/>

		 */}

				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='theme-color' content='#ffffff' />
			</Head>

			<ThemeContextProvider>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</>
	);
}
