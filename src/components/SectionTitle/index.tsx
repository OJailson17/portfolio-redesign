import { Box, Flex, Text } from '@chakra-ui/react';

interface SectionTitleProps {
	title: string;
	subtitle: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
	return (
		<>
			<Flex align={'center'} gap={4}>
				<Box width={4} height={0.5} background='#D9D9D9' />
				<Text
					fontWeight={'medium'}
					fontSize={12}
					letterSpacing={'7.5px'}
					lineHeight={6}
					color={'#656D72'}
					textTransform={'uppercase'}
				>
					{subtitle}
				</Text>
			</Flex>

			<Text
				fontWeight={'bold'}
				fontSize={'36px'}
				fontFamily={"'Plus Jakarta Sans', sans-serif"}
				mt={2}
				color={'#232E35'}
			>
				{title}
			</Text>
		</>
	);
};
