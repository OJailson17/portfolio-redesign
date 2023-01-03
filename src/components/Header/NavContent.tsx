import { Flex, Link, Text } from '@chakra-ui/react';

interface NavContentProps {
	isMobile?: boolean;
	onClose: () => void;
}

export const NavContent = ({ isMobile, onClose }: NavContentProps) => {
	return (
		<>
			<Flex
				as='nav'
				gap={14}
				mt={isMobile ? '20' : ''}
				direction={['column', 'column', 'column', 'row']}
				textAlign={'center'}
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
