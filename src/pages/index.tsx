import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
}
