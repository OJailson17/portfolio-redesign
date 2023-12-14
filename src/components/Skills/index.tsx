'use client';

import { useRef } from 'react';

import { backendTechnologies } from '../../utils/backendTechnologies';
import { frontendTechnologies } from '../../utils/frontendTechnologies';
import { SectionTitle } from '../SectionTitle';
import { TechComponent } from './TechComponent';

export const Skills = () => {
	const ref = useRef(null);

	return (
		<div>
			<SectionTitle title='Tecnologias & Ferramentas' subtitle='Habilidades' />

			<div
				ref={ref}
				// style={{
				// 	transform: isInView ? 'none' : 'translateX(-200px)',
				// 	opacity: isInView ? 1 : 0,
				// 	transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
				// }}
			>
				<div>
					<p>Frontend</p>

					<div>
						{frontendTechnologies.map(tech => (
							<TechComponent
								tech={tech.nome}
								level={tech.nível}
								key={tech.nome}
							/>
						))}
					</div>
				</div>

				<div>
					<p>Backend</p>

					<div>
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
		</div>
	);
};
