import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { backendTechnologies } from '../../utils/backendTecnologies';
import { frontendTechnologies } from '../../utils/frontendTecnologies';
import { SectionTitle } from '../SectionTitle';
import { TechComponent } from './TechComponent';

export const Skills = () => {
	return (
		<Box as='section' id='tecnologias' mt={36} paddingInline={'120'}>
			<SectionTitle title='Tecnologias & Ferramentas' subtitle='Habilidades' />

			<Flex mt={14} mb={4} justify={'space-between'}>
				<Box>
					<Text
						fontWeight={'bold'}
						fontSize={20}
						fontFamily={"'Plus Jakarta Sans', sans-serif"}
						color={'#656D72'}
					>
						Frontend
					</Text>

					<VStack spacing={10} mt={8}>
						{frontendTechnologies.map(tech => (
							<TechComponent
								tech={tech.nome}
								level={tech.nível}
								key={tech.nome}
							/>
						))}
					</VStack>
				</Box>

				<Box>
					<Text
						fontWeight={'bold'}
						fontSize={20}
						fontFamily={"'Plus Jakarta Sans', sans-serif"}
						color={'#656D72'}
					>
						Backend
					</Text>

					<VStack spacing={10} mt={8}>
						{backendTechnologies.map(tech => (
							<TechComponent
								tech={tech.nome}
								level={tech.nível}
								key={tech.nome}
							/>
						))}
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
};
