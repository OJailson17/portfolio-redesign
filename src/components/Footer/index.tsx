import Link from 'next/link';
import { InstagramIcon } from '../Icons/Instagram';
import { GithubIcon } from '../Icons/Github';

export const Footer = () => {
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
					<InstagramIcon theme={null} />
				</Link>
			</div>

			<p className='mt-6 mb-20 text-light-label text-sm dark:text-dark-label'>
				&copy; 2023 - Jailson de Oliveira
			</p>
		</footer>
	);
};
