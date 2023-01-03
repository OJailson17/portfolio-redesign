import { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../utils/gtag';

export default function Document() {
	return (
		<Html lang='pt-BR'>
			<Head>
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
					}}
				/>

				{/* Google fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/android-chore-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
				<link rel='manifest' href='/site.webmanifest.json' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='theme-color' content='#ffffff' />

				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta charSet='UTF-8' />
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

				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
