import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { useInView } from 'framer-motion';

import Link from 'next/link';
import { useRef } from 'react';

export interface Project {
	name: string;
	techs: string[];
	demo?: string;
	code: string;
	imageUrl: string;
}
interface ProjectItemProps {
	project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<Box
			maxW={'360px'}
			borderRadius={'lg'}
			background={'projectBackground'}
			ref={ref}
			style={{
				transform: isInView ? 'none' : 'translateX(-200px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
			}}
		>
			<Box w='100%' h='250px' borderRadius={'lg'}>
				<Image
					src={project.imageUrl}
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
					color={'text'}
				>
					{project.name}
				</Text>

				<HStack
					spacing={4}
					mt={4}
					wrap={'wrap'}
					wordBreak={'break-word'}
					whiteSpace='initial'
				>
					{project.techs.map(tech => (
						<Text
							fontSize={14}
							color={'label'}
							fontWeight={'medium'}
							key={tech}
						>
							{tech}
						</Text>
					))}
				</HStack>

				<Flex mt={4} mb={4} align={'center'} gap={4}>
					<Link href={project.demo || project.code} target='_blank'>
						<Button
							background={'buttonBackground'}
							_hover={{
								filter: 'brightness(90%)',
							}}
						>
							<Text fontSize={14} fontWeight={'medium'}>
								Demo
							</Text>
						</Button>
					</Link>
					<Link href={project.code} target='_blank'>
						<Button
							background={'buttonBackground'}
							_hover={{
								filter: 'brightness(90%)',
							}}
						>
							<Text fontSize={14} fontWeight={'medium'}>
								Código
							</Text>
						</Button>
					</Link>
				</Flex>
			</Box>
		</Box>
	);
};
