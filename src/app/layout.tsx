import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import '../styles/global.css';
import { ThemeContextProvider } from '../context/themeContext';
import { Metadata, Viewport } from 'next';

const inter = Inter({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	display: 'swap',

	variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['500', '700'],
	display: 'swap',

	variable: '--font-jakarta',
});

export const viewport: Viewport = {
	themeColor: '#ffffff',
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	title: 'Jailson de Oliveira | Portfólio',
	description:
		'Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.',
	applicationName: 'Jailson de Oliveira | Portfólio',
	creator: 'Jailson de Oliveira',
	referrer: 'origin-when-cross-origin',
	authors: [
		{
			name: 'Jailson de Oliveira',
			url: 'https://jailsondeoliveira.com.br',
		},
	],
	keywords: [
		'Desenvolvedor web',
		'Desenvolvedor frontend',
		'Backend',
		'Frontend',
		'Javascript',
		'React',
		'NextJs',
		'Typescript',
		'NestJs',
		'Node',
		'Programador',
		'Utinga',
		'Bahia',
	],
	openGraph: {
		siteName: 'Jailson de Oliveira | Portfólio',
		type: 'website',
		url: 'https://jailsondeoliveira.com.br',
		title: 'Jailson de Oliveira | Portfólio',
		description:
			'Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.',
		images: [
			{
				url: 'https://ik.imagekit.io/jayllson/portfolio-screenshot_sq5Cqo5-d.png',
				width: 1200,
				height: 563,
				alt: 'Imagem do portfólio',
			},
		],
		locale: 'pt_BR',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@ojailson17',
		title: 'Jailson de Oliveira | Portfólio',
		images: [
			'https://ik.imagekit.io/jayllson/portfolio-screenshot_sq5Cqo5-d.png',
		],
		description:
			'Portfólio pessoal contendo as principais habilidades e experiências de Jailson de Oliveira em desenvolvimento web, além também de exemplos de projetos pessoais.',
		site: 'https://jailsondeoliveira.com.br',
	},
	alternates: {
		canonical: 'https://jailsondeoliveira.com.br',
	},

	// verification: {
	// 	google: 'mNHo0kVRWw-LyGwyJpcuIaIV3iEzKPtwrLB0IqxglCA',
	// },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='pt-BR'
			className={`${inter.variable} ${jakarta.variable} dark scroll-smooth`}
		>
			<body className='bg-light-background dark:bg-dark-background  overflow-x-hidden'>
				<ThemeContextProvider>
					<SpeedInsights />
					<GoogleAnalytics
						gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					{children}
				</ThemeContextProvider>
			</body>
		</html>
	);
}
