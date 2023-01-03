import { ChakraProvider } from '@chakra-ui/react';

import Head from 'next/head';

import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { useTheme } from '../context/themeContext';

import { darkTheme, lightTheme } from '../styles/theme';

export default function Home() {
	const { theme } = useTheme();

	return (
		<ChakraProvider theme={!theme || theme === 'dark' ? darkTheme : lightTheme}>
			<Head>
				<title>Jailson de Oliveira | Portfólio</title>
			</Head>

			<Header />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</ChakraProvider>
	);
}
