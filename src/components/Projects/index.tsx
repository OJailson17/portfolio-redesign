import { projects } from '../../utils/projectsData';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
	return (
		<div>
			<SectionTitle title='Meus Projetos' subtitle='Experiência' />

			<div>
				{projects.map(project => (
					<ProjectItem key={project.name} project={project} />
				))}
			</div>
		</div>
	);
};
