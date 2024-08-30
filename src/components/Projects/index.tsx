import { projects } from '../../utils/projectsData';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
	return (
		<section id='projects' className=' w-[85%] max-w-[1600px] mx-auto mt-36'>
			<SectionTitle title='Meus Projetos' subtitle='Experiência' />

			<div className='grid grid-cols-1 gap-10 mt-14 md:grid-cols-2 lg:grid-cols-3  2xl:gap-14'>
				{projects.map(project => (
					<ProjectItem key={project.name} project={project} />
				))}
			</div>
		</section>
	);
};
