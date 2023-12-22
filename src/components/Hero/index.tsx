import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { HeroImg } from './HeroImg';

export const Hero = () => {
	// const { theme } = useTheme();

	return (
		<section
			id='hero'
			className='max-w-[1600px] w-[85%] mx-auto mt-36 flex items-start justify-between md:w-[90%] lg:items-center 2xl:w-[85%]'
		>
			<div className='w-full'>
				<div className='flex items-center gap-4 flex-row'>
					<div className='w-4 h-[2px] bg-[#E2E8F0]' />
					<p className='font-medium text-xs tracking-[7.5px] leading-6 text-label'>
						MEU NOME É
					</p>
				</div>

				<p className='font-bold text-[44px] mt-4 text-text font-jakarta'>
					Jailson de <span className='text-primary'>Oliveira.</span>
				</p>

				<p className='mt-8 leading-8 text-text'>
					Sou desenvolvedor web. Gosto de construir tudo, desde sites simples
					até sites mais complexos. Tenho foco em Front-end e possuo maior
					proficiência e experiência no ecossistema Javascript
				</p>

				<div className='flex gap-8 mt-10'>
					<Link href={'https://www.instagram.com/ojailson17/'} target='_blank'>
						<Image
							src={`/assets/instagram-light.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
					<Link href={'https://github.com/OJailson17'} target='_blank'>
						<Image
							src={`/assets/github-light.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>

					<Link
						href={'https://www.linkedin.com/in/ojailson17/'}
						target='_blank'
					>
						<Image
							src={`/assets/linkedin-light.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
				</div>
			</div>

			<div className='hidden items-center justify-center w-full md:flex lg:w-[90%] 2xl:w-full'>
				<HeroImg />
			</div>
		</section>
	);
};
