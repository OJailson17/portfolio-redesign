import { Button, Flex, HStack, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useTheme } from '../../context/themeContext';

export const Header = () => {
	const { theme, changeTheme } = useTheme();

	return (
		<Flex
			as='header'
			paddingInline={'120px'}
			paddingTop={10}
			align={'center'}
			justify={'space-between'}
		>
			<Image
				src={`/assets/logo-${theme === 'light' ? 'dark' : 'light'}.svg`}
				alt=''
				width='138'
				height='54'
			/>

			<HStack as='nav' spacing={14}>
				<Link href='/#tecnologias' color='text'>
					<Text fontWeight={'medium'}>Tecnologias</Text>
				</Link>
				<Link href='/#projetos' color='text'>
					<Text fontWeight={'medium'}>Projetos</Text>
				</Link>
				<Link href='/#contato' color='text'>
					<Text fontWeight={'medium'}>Contato</Text>
				</Link>
			</HStack>

			<Flex gap='8'>
				<Button
					w={'25'}
					h={'25'}
					colorScheme='transparent'
					onClick={() => changeTheme()}
				>
					<Image
						src={`/assets/${theme === 'light' ? 'moon' : 'sun'}.svg`}
						alt='moon icon'
						width='25'
						height='25'
					/>
				</Button>
				<Link
					href='/assets/documents/jailson-de-oliveira-cv.pdf'
					download
					color='text'
				>
					<Text fontWeight={'medium'} fontSize={14}>
						Download CV
					</Text>
				</Link>
			</Flex>
		</Flex>
	);
};
