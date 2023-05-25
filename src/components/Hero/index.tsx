import {
	Box,
	Flex,
	HStack,
	keyframes,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useTheme } from '../../context/themeContext';

import { HeroImg } from './HeroImg';

export const Hero = () => {
	const { theme } = useTheme();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const animationKeyFrame = keyframes`
	from {
	opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

	const animation = `${animationKeyFrame} linear 0.5s forwards`;

	return (
		<Flex
			as={motion.section}
			animation={animation}
			maxW={1600}
			w={['85%' ,'85%', '90%', '90%', '85%']}
			margin={'0 auto'}
			mt={'36'}
			align={!isWideVersion ? 'flex-start' : 'center'}
			justify={'space-between'}
		>
			<Box width={['100%', '100%', '100%', '100%', '100%']}>
				<Flex align={'center'} gap={4} direction={'row'}>
					<Box width={4} height={0.5} background='#D9D9D9' />
					<Text
						fontWeight={'medium'}
						fontSize={12}
						letterSpacing={'7.5px'}
						lineHeight={6}
						color={'label'}
					>
						MEU NOME É
					</Text>
				</Flex>

				<Text
					fontWeight={'bold'}
					fontSize={'44px'}
					fontFamily={"'Plus Jakarta Sans', sans-serif"}
					mt={4}
					color={'text'}
				>
					Jailson de{' '}
					<Text as='span' color={'primary'}>
						Oliveira.
					</Text>
				</Text>

				<Text mt={8} lineHeight={8} color={'text'}>
					Sou desenvolvedor web. Gosto de construir tudo, desde sites simples
					até sites mais complexos. Tenho foco em Front-end e possuo maior
					proficiência e experiência no ecossistema Javascript
				</Text>

				<HStack spacing={8} mt={10}>
					<Link href={'https://www.instagram.com/ojailson17/'} target='_blank'>
						<Image
							src={`/assets/instagram-${
								!theme || theme === 'dark' ? 'light' : 'dark'
							}.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
					<Link href={'https://github.com/OJailson17'} target='_blank'>
						<Image
							src={`/assets/github-${
								!theme || theme === 'dark' ? 'light' : 'dark'
							}.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>

					<Link
						href={'https://www.linkedin.com/in/ojailson17/'}
						target='_blank'
					>
						<Image
							src={`/assets/linkedin-${
								!theme || theme === 'dark' ? 'light' : 'dark'
							}.svg`}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
				</HStack>
			</Box>

			<Flex display={['none', 'none', 'flex']} alignItems={'center'} justifyContent={'center'} width={['100%', '100%', '100%', '90%', '100%']}>
				<HeroImg />
			</Flex>
		</Flex>
	);
};
