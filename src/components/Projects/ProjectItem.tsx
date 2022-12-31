import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const ProjectItem = () => {
	return (
		<Box w={'360px'} borderRadius={'lg'} background={'#f1f1f1'}>
			<Box w='100%' h='250px' borderRadius={'lg'}>
				<Image
					src='https://picsum.photos/200/300'
					alt=''
					objectFit={'cover'}
					w='100%'
					h='100%'
					borderTopLeftRadius={'lg'}
					borderTopRightRadius={'lg'}
				/>
			</Box>

			<Box paddingInline={4}>
				<Text
					mt={4}
					fontFamily={"'Plus Jakarta Sans', sans-serif"}
					fontWeight={'medium'}
					color={'#232E35'}
				>
					Bíblia Sagrada Website
				</Text>

				<HStack
					spacing={4}
					mt={4}
					wrap={'wrap'}
					wordBreak={'break-word'}
					whiteSpace='initial'
				>
					{['Styled Components', 'ReactJS', 'Node'].map(el => (
						<Text
							fontSize={14}
							color={'#656D72'}
							fontWeight={'medium'}
							key={el}
						>
							{el}
						</Text>
					))}
				</HStack>

				<Flex mt={4} mb={4} align={'center'} gap={4}>
					<Link href={'/'}>
						<Button>
							<Text fontSize={14} fontWeight={'medium'}>
								Demo
							</Text>
						</Button>
					</Link>
					<Link href={'/'}>
						<Button fontSize={14} fontWeight={'medium'}>
							<Text>Código</Text>
						</Button>
					</Link>
				</Flex>
			</Box>
		</Box>
	);
};
