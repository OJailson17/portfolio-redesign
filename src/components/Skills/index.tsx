import { backendTechnologies } from '../../utils/backendTechnologies';
import { frontendTechnologies } from '../../utils/frontendTechnologies';
import { SectionTitle } from '../SectionTitle';
import { TechComponent } from './TechComponent';

export const Skills = () => {
	return (
		<section id='technologies' className='max-w-[1600px] w-[85%] mx-auto mt-36'>
			<SectionTitle title='Tecnologias & Ferramentas' subtitle='Habilidades' />

			<div className='flex items-start justify-between flex-col gap-10 mt-14 mb-4 md:flex-row md:gap-0'>
				<div className='w-full'>
					<p className='font-bold text-xl text-light-label font-jakarta dark:text-dark-label'>
						Frontend
					</p>

					<div className='flex flex-col gap-10 mt-8'>
						{frontendTechnologies.map(tech => (
							<TechComponent
								tech={tech.nome}
								level={tech.nível}
								key={tech.nome}
							/>
						))}
					</div>
				</div>

				<div className='w-full'>
					<p className='font-bold text-xl text-light-label font-jakarta dark:text-dark-label'>
						Backend
					</p>

					<div className='flex flex-col gap-10 mt-8'>
						{backendTechnologies.map(tech => (
							<TechComponent
								tech={tech.nome}
								level={tech.nível}
								key={tech.nome}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
