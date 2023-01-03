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
					color={'label'}
					textTransform={'uppercase'}
				>
					{subtitle}
				</Text>
			</Flex>

			<Text
				fontWeight={'bold'}
				fontSize={36}
				fontFamily={"'Plus Jakarta Sans', sans-serif"}
				mt={2}
				color={'text'}
			>
				{title}
			</Text>
		</>
	);
};
