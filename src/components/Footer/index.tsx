import { Flex, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<Flex
			as='footer'
			paddingInline={'120px'}
			mt={36}
			align={'center'}
			justify={'center'}
			direction={'column'}
		>
			<HStack spacing={8}>
				<Link href={'/'}>
					<Image
						src={'/assets/instagram-footer.svg'}
						alt='Instagram icon'
						width={24}
						height={24}
					/>
				</Link>
				<Link href={'/'}>
					<Image
						src={'/assets/github-footer.svg'}
						alt='Instagram icon'
						width={24}
						height={24}
					/>
				</Link>
				<Link href={'/'}>
					<Image
						src={'/assets/linkedin-footer.svg'}
						alt='Instagram icon'
						width={24}
						height={24}
					/>
				</Link>
			</HStack>

			<Text mt={6} mb={20} color={'#656D72'} fontSize={14}>
				&copy; 2023 - Jailson de Oliveira
			</Text>
		</Flex>
	);
};
