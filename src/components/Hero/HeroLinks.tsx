'use client';

import Link from 'next/link';
import { useTheme } from '../../context/themeContext';
import { InstagramIcon } from '../Icons/Instagram';
import { GithubIcon } from '../Icons/Github';
import { LinkedInIcon } from '../Icons/LinkedIn';

export const HeroLinks = () => {
	const { theme } = useTheme();

	return (
		<div className='flex gap-8 mt-10'>
			<Link
				href={'https://www.instagram.com/ojailson17/'}
				target='_blank'
				aria-label='Instagram'
			>
				<InstagramIcon theme={!theme ? 'dark' : theme} />
			</Link>
			<Link
				href={'https://github.com/OJailson17'}
				target='_blank'
				aria-label='Github'
			>
				<GithubIcon theme={!theme ? 'dark' : theme} />
			</Link>

			<Link
				href={'https://www.linkedin.com/in/ojailson17/'}
				target='_blank'
				aria-label='LinkedIn'
			>
				<LinkedInIcon theme={!theme ? 'dark' : theme} />
			</Link>
		</div>
	);
};
