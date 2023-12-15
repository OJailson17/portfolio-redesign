import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export const Header = () => {
	return (
		// <nav className='p-5 bg-red-500 shadow md:flex md:items-center md:justify-between'>
		// 	<div className='flex items-center justify-between'>
		// 		<Link href={'/'}>
		// 			<Image
		// 				src={`/assets/logo-light.svg`}
		// 				alt=''
		// 				width='138'
		// 				height='54'
		// 			/>
		// 		</Link>

		// 		<div className='cursor-pointer md:hidden block mx-2'>
		// 			<Image src={`/assets/menu-light.svg`} alt='' width={30} height={30} />
		// 		</div>
		// 	</div>

		// 	<ul className='md:flex md:items-center md:z-auto md:static md:w-auto md:py-0 md:opacity-100 opacity-0 py-4 md:pl-0 pl-7 absolute gap-4 z-[-1] bg-green-500 w-full left-0 top-[-400px] transition-all ease-in duration-500'>
		// 		<li className='text-xl duration-500'>Tecnologias</li>
		// 		<li className='text-xl duration-500'>Projetos</li>
		// 		<li className='text-xl duration-500'>Contato</li>
		// 	</ul>
		// </nav>
		<Navbar />
	);
};
