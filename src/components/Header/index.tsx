import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
	return (
		<Flex
			as='header'
			paddingInline={'120px'}
			paddingTop={10}
			align={'center'}
			justify={'space-between'}
		>
			<Image src='/assets/logo-light.svg' alt='' width='138' height='54' />

			<HStack as='nav' spacing={14}>
				<Link href='/'>
					<Text fontWeight={'medium'}>Tecnologias</Text>
				</Link>
				<Link href='/'>
					<Text fontWeight={'medium'}>Projetos</Text>
				</Link>
				<Link href='/'>
					<Text fontWeight={'medium'}>Contato</Text>
				</Link>
			</HStack>

			<Flex gap='8'>
				<Button w={'25'} h={'25'} colorScheme='transparent'>
					<Image
						src='/assets/moon.svg'
						alt='moon icon'
						width='25'
						height='25'
					/>
				</Button>
				<Link href={'/'}>
					<Text fontWeight={'medium'} fontSize={14}>
						Download CV
					</Text>
				</Link>
			</Flex>
		</Flex>
	);
};
