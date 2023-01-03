import { Box, Flex, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { backendTechnologies } from '../../utils/backendTechnologies';
import { frontendTechnologies } from '../../utils/frontendTechnologies';
import { SectionTitle } from '../SectionTitle';
import { TechComponent } from './TechComponent';

export const Skills = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box
			as='section'
			id='tecnologias'
			mt={36}
			paddingInline={['30px', '30px', '50px', '50px', '120px']}
		>
			<SectionTitle title='Tecnologias & Ferramentas' subtitle='Habilidades' />

			<Flex
				mt={14}
				mb={4}
				justify={'space-between'}
				direction={['column', 'column', 'row']}
				align={!isWideVersion ? 'flex-start' : ''}
				gap={!isWideVersion ? 10 : 0}
			>
				<Box w='100%'>
					<Text
						fontWeight={'bold'}
						fontSize={20}
						fontFamily={"'Plus Jakarta Sans', sans-serif"}
						color={'label'}
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

				<Box w='100%'>
					<Text
						fontWeight={'bold'}
						fontSize={20}
						fontFamily={"'Plus Jakarta Sans', sans-serif"}
						color={'label'}
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
