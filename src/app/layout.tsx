import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
	title: 'Home | Reading Dashboard',
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className={`${inter.variable} ${jakarta.variable} dark scroll-smooth`}
		>
			<body className='bg-light-background dark:bg-dark-background  overflow-x-hidden'>
				<ThemeContextProvider>
					<SpeedInsights />
					{children}
				</ThemeContextProvider>
			</body>
		</html>
	);
}
