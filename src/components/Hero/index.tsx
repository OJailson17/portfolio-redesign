import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { HeroImg } from './HeroImg';

export const Hero = () => {
	// const { theme } = useTheme();

	return (
		<div>
			<div>
				<div>
					<div />
					<p>MEU NOME É</p>
				</div>

				<p>
					Jailson de <span>Oliveira.</span>
				</p>

				<p>
					Sou desenvolvedor web. Gosto de construir tudo, desde sites simples
					até sites mais complexos. Tenho foco em Front-end e possuo maior
					proficiência e experiência no ecossistema Javascript
				</p>

				<div>
					<Link href={'https://www.instagram.com/ojailson17/'} target='_blank'>
						<Image
							src={`/assets/instagram-dark.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
					<Link href={'https://github.com/OJailson17'} target='_blank'>
						<Image
							src={`/assets/github-dark.svg`}
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
							src={`/assets/linkedin-dark.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
				</div>
			</div>

			<div>
				<HeroImg />
			</div>
		</div>
	);
};
