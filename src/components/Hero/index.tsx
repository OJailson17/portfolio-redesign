import { HeroImg } from './HeroImg';
import { HeroLinks } from './HeroLinks';

export const Hero = () => {
	return (
		<section
			id='hero'
			className='max-w-[1600px] w-[85%] mx-auto mt-36 flex items-start justify-between md:w-[90%] lg:items-center 2xl:w-[85%]'
		>
			<div className='w-full'>
				<div className='flex items-center gap-4 flex-row'>
					<div className='w-4 h-[2px] bg-[#E2E8F0]' />
					<p className='font-medium text-xs tracking-[7.5px] leading-6 text-light-label dark:text-dark-label'>
						MEU NOME É
					</p>
				</div>

				<p className='font-bold text-[44px] mt-4 text-light-text font-jakarta dark:text-dark-text'>
					Jailson de{' '}
					<span className='text-light-primary dark:text-dark-primary'>
						Oliveira.
					</span>
				</p>

				<p className='mt-8 leading-8 text-light-text dark:text-dark-text'>
					Sou desenvolvedor frontend. Gosto de construir tudo, desde sites
					simples até interfaces mais complexas. Apesar de ter foco em frontend,
					também possuo amplo conhecimento em backend. Tenho maior proficiência
					e experiência no ecossistema Javascript.
				</p>

				<HeroLinks />
			</div>

			<div className='hidden items-center justify-center w-full md:flex lg:w-[90%] 2xl:w-full'>
				<HeroImg />
			</div>
		</section>
	);
};
