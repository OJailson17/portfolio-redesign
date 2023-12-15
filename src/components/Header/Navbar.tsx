'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// const Navbar = () => {
// 	const [open, setOpen] = useState(false);
// 	// return (
// 	// 	<nav className='bg-red-500'>
// 	// 		<div className='flex items-center font-medium justify-around'>
// 	// 			<div className='z-50 p-5 md:w-auto w-full flex justify-between'>
// 	// 				<Link href={'/'}>
// 	// 					<Image
// 	// 						src={`/assets/logo-light.svg`}
// 	// 						alt=''
// 	// 						width='138'
// 	// 						height='54'
// 	// 					/>
// 	// 				</Link>
// 	// 				<div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
// 	// 					{open ? (
// 	// 						'close'
// 	// 					) : (
// 	// 						<Image
// 	// 							src={`/assets/menu-light.svg`}
// 	// 							alt=''
// 	// 							width={30}
// 	// 							height={30}
// 	// 						/>
// 	// 					)}
// 	// 				</div>
// 	// 			</div>
// 	// 			<ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
// 	// 				<li>
// 	// 					<Link href='/' className='py-7 px-3 inline-block'>
// 	// 						Home
// 	// 					</Link>
// 	// 				</li>
// 	// 			</ul>
// 	// 			<div className='md:block'>
// 	// 				<button>dark</button>
// 	// 			</div>
// 	// 			{/* Mobile nav */}
// 	// 			<ul
// 	// 				className={`
// 	//       md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
// 	//       duration-500 ${open ? 'left-0' : 'left-[-100%]'}
// 	//       `}
// 	// 			>
// 	// 				<li>
// 	// 					<Link href='/' className='py-7 px-3 inline-block'>
// 	// 						Home
// 	// 					</Link>
// 	// 				</li>
// 	// 				<div className='py-5'>
// 	// 					<button>dark</button>
// 	// 				</div>
// 	// 			</ul>
// 	// 		</div>
// 	// 	</nav>
// 	// );

// 	return (
// 		<nav className=' w-[85%] mx-auto pt-4'>
// 			<div className='container mx-auto flex justify-between items-center'>
// 				{/* Logo on the left */}
// 				<div>
// 					<Link href={'/'}>
// 						<Image
// 							src={`/assets/logo-light.svg`}
// 							alt=''
// 							width='138'
// 							height='54'
// 						/>
// 					</Link>
// 				</div>

// 				{/* Mobile menu button */}
// 				<div className='flex flex-row-reverse gap-5 items-center justify-between md:flex-row md:w-[65%]'>
// 					<div className='md:hidden'>
// 						<button className=''>
// 							<Image
// 								src={`/assets/menu-light.svg`}
// 								alt='menu icon'
// 								width={30}
// 								height={30}
// 							/>
// 						</button>
// 					</div>

// 					{/* Links in the middle (hidden on small screens) */}
// 					<div className='flex flex-col absolute top-28 gap-14 md:flex-row bg-red-500 h-full w-1/2 items-center static'>
// 						<a href='#' className='text-white hover:underline'>
// 							Projetos
// 						</a>
// 						<a href='#' className='text-white hover:underline'>
// 							Tecnologias
// 						</a>
// 						<a href='#' className='text-white hover:underline'>
// 							Contato
// 						</a>
// 					</div>

// 					{/* Button on the right */}
// 					<div className='flex gap-5 items-center justify-center flex-row md:gap-8'>
// 						<button className='w-6 h-6 relative'>
// 							<Image
// 								src={`/assets/sun.svg`}
// 								alt='moon icon'
// 								fill
// 								style={{
// 									objectFit: 'contain',
// 								}}
// 							/>
// 						</button>

// 						<Link
// 							href='/assets/documents/jailson-de-oliveira-cv.pdf'
// 							download
// 							className='text-text font-medium text-md'
// 						>
// 							CV
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

import Link from 'next/link';
import React, { useState } from 'react';

import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { useTheme } from '../../context/themeContext';
import { navLink } from '../../utils/constants/header';

// !TODO fix the nav bar transition
export default function Navbar() {
	const [isSideMenuOpen, setMenu] = useState(false);

	const { changeTheme } = useTheme();

	return (
		<nav className='flex justify-between items-center pt-10  w-[85%] mx-auto'>
			<div className='flex items-center gap-8 justify-between w-[65%]'>
				<section className='flex items-center gap-4'>
					{/* menu */}

					{/* logo */}
					<Link href={'/'}>
						<Image
							src={`/assets/logo-light.svg`}
							alt=''
							width='138'
							height='54'
						/>
					</Link>
				</section>

				<ul className='flex lg:gap-14'>
					{navLink.map((link, i) => (
						<li key={i}>
							<Link className='hidden lg:block  text-text' href={link.href}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* sidebar mobile menu */}
			<div
				className={clsx(
					' fixed h-full w-screen lg:hidden backdrop-blur-sm top-0 left-0 translate-x-full transition-all ',
					isSideMenuOpen && '-translate-x-0',
				)}
			>
				<section className='text-text bg-background flex-col absolute right-0 top-0 h-screen gap-8 z-50 w-[70%] md:w-1/3 flex items-center '>
					<button
						onClick={() => setMenu(false)}
						className='absolute right-6 top-5 bg-red-500 mt-8 mb-8 text-3xl cursor-none md:cursor-pointer'
					>
						<IoCloseOutline />
					</button>
					<ul className='mt-20'>
						{navLink.map((link, i) => (
							<li key={i}>
								<Link
									className='font-bold'
									href={link.href}
									onClick={() => setMenu(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>

			{/* last section */}
			<section className='flex items-center gap-4'>
				{/* theme toggle */}
				<button onClick={changeTheme} className='cursor-none lg:cursor-pointer'>
					<Image
						width={30}
						height={30}
						className='h-8 w-8 rounded-full '
						src='/assets/sun.svg'
						alt='avatar-img'
					/>
				</button>
				{/* CV link */}
				<Link
					href='/assets/documents/jailson-de-oliveira-cv.pdf'
					download
					className='text-text font-medium text-md'
				>
					CV{' '}
				</Link>
				<button
					onClick={() => setMenu(true)}
					className='text-3xl cursor-none md:cursor-pointer lg:hidden'
				>
					<Image
						src={`/assets/menu-light.svg`}
						alt='menu icon'
						width={30}
						height={30}
					/>
				</button>
			</section>
		</nav>
	);
}
