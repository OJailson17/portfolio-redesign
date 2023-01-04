import { Flex, Link, Text } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface NavContentProps {
	isMobile?: boolean;
	onClose?: () => void;
}

export const NavContent = ({ isMobile, onClose }: NavContentProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		console.log('Element is in view: ', isInView);
	}, [isInView]);

	return (
		<>
			<Flex
				as='nav'
				gap={14}
				mt={isMobile ? '20' : ''}
				direction={['column', 'column', 'column', 'row']}
				textAlign={'center'}
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
				}}
			>
				<Link href='/#tecnologias' color='text' onClick={onClose}>
					<Text fontWeight={'medium'}>Tecnologias</Text>
				</Link>
				<Link href='/#projetos' color='text' onClick={onClose}>
					<Text fontWeight={'medium'}>Projetos</Text>
				</Link>
				<Link href='/#contato' color='text' onClick={onClose}>
					<Text fontWeight={'medium'}>Contato</Text>
				</Link>
			</Flex>
		</>
	);
};
