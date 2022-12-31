import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { SectionTitle } from '../SectionTitle';
import { TechComponent } from './TechComponent';

export const Skills = () => {
	return (
		<Box as='section' mt={36} paddingInline={'120'}>
			<SectionTitle title='Tecnologias & Ferramentas' subtitle='Habilidades' />

			<Flex mt={14} mb={4} justify={'space-between'}>
				<Box>
					<Text
						fontWeight={'bold'}
						fontSize={20}
						fontFamily={"Plus Jakarta Sans', sans-serif"}
						style={{ color: '#656D72' }}
					>
						Frontend
					</Text>

					<VStack spacing={10} mt={8}>
						<TechComponent tech='Javascript' level='80%' />
						<TechComponent tech='Typescript' level='70%' />
						<TechComponent tech='ReactJS' level='80%' />
						<TechComponent tech='NextJS' level='80%' />
					</VStack>
				</Box>

				<Box>
					<Text
						fontWeight={'bold'}
						fontSize={20}
						fontFamily={"Plus Jakarta Sans', sans-serif"}
						style={{ color: '#656D72' }}
					>
						Backend
					</Text>

					<VStack spacing={10} mt={8}>
						<TechComponent tech='Javascript' level='80%' />
						<TechComponent tech='Typescript' level='70%' />
						<TechComponent tech='ReactJS' level='80%' />
						<TechComponent tech='NextJS' level='80%' />
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
};
