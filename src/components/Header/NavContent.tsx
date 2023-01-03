import { Flex, Link, Text } from '@chakra-ui/react';

interface NavContentProps {
	isMobile?: boolean;
}

export const NavContent = ({ isMobile }: NavContentProps) => {
	return (
		<>
			<Flex
				as='nav'
				gap={14}
				mt={isMobile ? '20' : ''}
				direction={['column', 'column', 'column', 'row']}
				textAlign={'center'}
			>
				<Link href='/#tecnologias' color='text'>
					<Text fontWeight={'medium'}>Tecnologias</Text>
				</Link>
				<Link href='/#projetos' color='text'>
					<Text fontWeight={'medium'}>Projetos</Text>
				</Link>
				<Link href='/#contato' color='text'>
					<Text fontWeight={'medium'}>Contato</Text>
				</Link>
			</Flex>
		</>
	);
};
