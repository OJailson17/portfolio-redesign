import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Hero = () => {
	return (
		<Flex
			as='section'
			paddingInline={'120px'}
			mt={'36'}
			align={'center'}
			justify={'space-between'}
			// bg='red'
		>
			<Box w={'50%'}>
				<Flex align={'center'} gap={4}>
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
							src={'/assets/instagram-light.svg'}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
					<Link href={'https://github.com/OJailson17'} target='_blank'>
						<Image
							src={'/assets/github-light.svg'}
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
							src={'/assets/linkedin-light.svg'}
							alt='Github icon'
							width={'24'}
							height={'24'}
						/>
					</Link>
				</HStack>
			</Box>

			<Box>
				<Image
					src={'/assets/hero-image.svg'}
					alt=''
					width={'545'}
					height={'496'}
				/>
			</Box>
		</Flex>
	);
};
