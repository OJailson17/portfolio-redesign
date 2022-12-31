import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
	return (
		<Box as='section' mt={36} paddingInline={'120px'}>
			<SectionTitle title='Meus Projetos' subtitle='Experiência' />

			<SimpleGrid columns={3} spacing={14} mt={36}>
				{[...new Array(3)].map(project => (
					<ProjectItem key={project} />
				))}
			</SimpleGrid>
		</Box>
	);
};
