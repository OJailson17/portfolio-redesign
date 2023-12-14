import { Inter } from 'next/font/google';
import '../styles/global.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
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
		<html className={inter.className}>
			<body className='bg-background scroll-smooth'>{children}</body>
		</html>
	);
}
