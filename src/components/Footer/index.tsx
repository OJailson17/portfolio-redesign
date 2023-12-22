import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className='w-[85%] mx-auto mt-36 flex items-center justify-center flex-col'>
			<div className='flex gap-8'>
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
			</div>

			<p className='mt-6 mb-20 text-light-label text-sm dark:text-dark-label'>
				&copy; 2023 - Jailson de Oliveira
			</p>
		</footer>
	);
};
