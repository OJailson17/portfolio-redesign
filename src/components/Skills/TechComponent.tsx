import { Box, Text } from '@chakra-ui/react';

interface TechComponentProps {
	tech: string;
	level: string;
}

export const TechComponent = ({ tech, level }: TechComponentProps) => {
	return (
		<Box>
			<Text fontWeight={'medium'} fontSize={14} color={'text'}>
				{tech}
			</Text>

			<Box
				width={'300px'}
				height={2}
				mt={3}
				background='#cfd7db'
				borderRadius={'full'}
			>
				<Box
					width={level}
					height={2}
					background='#7E74F1'
					borderRadius={'full'}
				/>
			</Box>
		</Box>
	);
};
