import { Box, Flex, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { backendTechnologies } from '../../utils/backendTechnologies';
import { frontendTechnologies } from '../../utils/frontendTechnologies';
import { SectionTitle } from '../SectionTitle';
import { TechComponent } from './TechComponent';

export const Skills = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<Box as='section' id='tecnologias' w={['85%']} margin={'0 auto'} mt={36}>
			<SectionTitle title='Tecnologias & Ferramentas' subtitle='Habilidades' />

			<Flex
				mt={14}
				mb={4}
				justify={'space-between'}
				direction={['column', 'row', 'row']}
				align={!isWideVersion ? 'flex-start' : ''}
				gap={!isWideVersion ? 10 : 0}
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
				}}
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
