import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { projects } from '../../utils/projectsData';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
	return (
		<Box as='section' id='projetos' mt={36} paddingInline={'120px'}>
			<SectionTitle title='Meus Projetos' subtitle='Experiência' />

			<SimpleGrid columns={3} spacing={14} mt={36}>
				{projects.map(project => (
					<ProjectItem key={project.name} project={project} />
				))}
			</SimpleGrid>
		</Box>
	);
};
