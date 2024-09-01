import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';
import '../styles/global.css';
import { ThemeContextProvider } from '../context/themeContext';

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

export const metadata = {
	title: 'Jailson de Oliveira | Portfólio',
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
					<GoogleTagManager
						gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					{children}
				</ThemeContextProvider>
			</body>
		</html>
	);
}
