import {
	Box,
	Button,
	Flex,
	Link as ChakraLink,
	Text,
	Tooltip,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from './Navbar';
import { NavContent } from './NavContent';
import { useTheme } from '../../context/themeContext';

export const Header = () => {
	const { theme, changeTheme } = useTheme();

	const disclosure = useDisclosure();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Flex
			as='header'
			paddingInline={['30px', '30px', '50px', '50px', '120px']}
			paddingTop={10}
			align={'center'}
			justify={'space-between'}
		>
			<Link href={'/'}>
				<Image
					src={`/assets/logo-${theme === 'light' ? 'dark' : 'light'}.svg`}
					alt=''
					width='138'
					height='54'
				/>
			</Link>

			{isWideVersion && <NavContent />}

			<Navbar disclosure={disclosure} />

			<Flex gap={[5, 8, 8]} direction={['row']} align={'center'}>
				<Tooltip label='Mudar tema' aria-label='A tooltip'>
					<Button
						w={'24px'}
						h={'24px'}
						colorScheme='transparent'
						onClick={() => changeTheme()}
					>
						<Image
							src={`/assets/${theme === 'light' ? 'moon' : 'sun'}.svg`}
							alt='moon icon'
							fill
							style={{
								objectFit: 'contain',
							}}
						/>
					</Button>
				</Tooltip>

				<Tooltip label='Baixar Currículo' aria-label='A tooltip'>
					<ChakraLink
						href='/assets/documents/jailson-de-oliveira-cv.pdf'
						download
						color='text'
					>
						<Text fontWeight={'medium'} fontSize={14}>
							{!isWideVersion ? 'CV' : 'Download CV'}
						</Text>
					</ChakraLink>
				</Tooltip>

				{!isWideVersion && (
					<Box onClick={disclosure.onOpen}>
						<Image
							src={`/assets/menu-${theme === 'light' ? 'dark' : 'light'}.svg`}
							alt=''
							width={30}
							height={30}
						/>
					</Box>
				)}
			</Flex>
		</Flex>
	);
};
