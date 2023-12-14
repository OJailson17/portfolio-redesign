import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div>
			<div>
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

			<p>&copy; 2023 - Jailson de Oliveira</p>
		</div>
	);
};
