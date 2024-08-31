'use client';

import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import { useRef, useState } from 'react';
import { useTheme } from '../../context/themeContext';
import { SunIcon } from '../Icons/Sun';
import { MoonIcon } from '../Icons/Moon';
import { LogoIcon } from '../Icons/Logo';
import { navLink } from '../../utils/constants/header';

export const Header = () => {
	const [menuIcon, setMenuIcon] = useState<'burger' | 'close'>('burger');

	const { changeTheme, theme } = useTheme();

	const menuIcons = {
		burger: (
			<IoIosMenu color={!theme || theme === 'dark' ? 'white' : 'black'} />
		),
		close: (
			<IoCloseOutline color={!theme || theme === 'dark' ? 'white' : 'black'} />
		),
	};

	const navLinksRef = useRef<HTMLDivElement | null>(null);

	const onToggleMenu = () => {
		menuIcon === 'burger' ? setMenuIcon('close') : setMenuIcon('burger');

		navLinksRef.current?.classList.toggle('top-[64px]');
	};

	return (
		<header className='py-5 max-w-[1600px] mx-auto'>
			<nav className='flex dark:bg-dark-background  justify-between items-center w-[85%] md:w-[90%] min-[2000px]:w-full mx-auto '>
				<div>
					<Link href={'/'}>
						<LogoIcon theme={!theme ? 'dark' : theme} />
					</Link>
				</div>

				<div
					ref={navLinksRef}
					className='duration-500 md:static max-md:dark:bg-dark-background  absolute md:min-h-fit h-full right-0 top-[-100%] max-md:w-1/2 flex justify-center px-5 '
				>
					<ul className='flex md:flex-row flex-col max-md:mt-14 md:items-center md:gap-[4vw] gap-8'>
						{navLink.map(link => (
							<li key={link.label}>
								<Link
									className='dark:text-dark-text hover:underline'
									href={link.href}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className='flex items-center gap-6'>
					<button onClick={changeTheme} className='px-2 py-2 rounded-full'>
						{!theme || theme === 'dark' ? <SunIcon /> : <MoonIcon />}
					</button>
					<a href='#' className='dark:text-dark-text hover:underline px-1'>
						CV
					</a>
					<button
						onClick={onToggleMenu}
						className='text-3xl cursor-pointer md:hidden'
					>
						{menuIcons[menuIcon]}
					</button>
				</div>
			</nav>
		</header>
	);
};
