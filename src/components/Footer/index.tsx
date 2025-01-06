import Link from 'next/link';
import { InstagramIcon } from '../Icons/Instagram';
import { GithubIcon } from '../Icons/Github';
import { LinkedInIcon } from '../Icons/LinkedIn';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-[85%] mx-auto mt-36 flex items-center justify-center flex-col'>
			<div className='flex gap-8'>
				<Link
					href={'https://www.instagram.com/ojailson17'}
					target='_blank'
					aria-label='Instagram'
				>
					<InstagramIcon theme={null} />
				</Link>
				<Link
					href={'https://github.com/OJailson17'}
					target='_blank'
					aria-label='Github'
				>
					<GithubIcon theme={null} />
				</Link>
				<Link
					href={'https://www.linkedin.com/in/ojailson17'}
					target='_blank'
					aria-label='LinkedIn'
				>
					<LinkedInIcon theme={null} />
				</Link>
			</div>

			<p className='mt-6 text-light-label text-sm dark:text-dark-label'>
				&copy; 2023 - {currentYear}
			</p>
			<p className='mb-20 mt-2 text-light-label text-sm dark:text-dark-label'>
				Jailson de Oliveira
			</p>
		</footer>
	);
};
