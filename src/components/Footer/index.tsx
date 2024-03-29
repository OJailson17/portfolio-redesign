import { Flex, HStack, Text } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<Flex
			as='footer'
			// paddingInline={['30px', '30px', '50px', '90px', '120px']}
			w={['85%']}
			margin={'0 auto'}
			mt={36}
			align={'center'}
			justify={'center'}
			direction={'column'}
		>
			<HStack spacing={8}>
				<Link href={'https://www.instagram.com/ojailson17'} target='_blank'>
					<Image
						src={'/assets/instagram-footer.svg'}
						alt='Instagram icon'
						width={24}
						height={24}
					/>
				</Link>
				<Link href={'https://github.com/OJailson17'} target='_blank'>
					<Image
						src={'/assets/github-footer.svg'}
						alt='Instagram icon'
						width={24}
						height={24}
					/>
				</Link>
				<Link href={'https://www.linkedin.com/in/ojailson17'} target='_blank'>
					<Image
						src={'/assets/linkedin-footer.svg'}
						alt='Instagram icon'
						width={24}
						height={24}
					/>
				</Link>
			</HStack>

			<Text mt={6} mb={20} color={'label'} fontSize={14}>
				&copy; 2023 - Jailson de Oliveira
			</Text>
		</Flex>
	);
};
