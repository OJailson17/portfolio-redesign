import { Theme } from '../../context/themeContext';

interface LinkedInIconProps {
	theme?: Theme;
}

export const LinkedInIcon = ({ theme = 'dark' }: LinkedInIconProps) => {
	const fillColor = !theme ? '#656D72' : theme === 'dark' ? '#fff' : '#232E35';

	return (
		<svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M17.5 8.999c-.895 0-1.777.221-2.566.644A.999.999 0 0014 9h-4a1 1 0 00-1 1v12a1 1 0 001 1h4a.997.997 0 001-1v-5.5a1 1 0 112 0v5.5a1 1 0 001 1h4a.997.997 0 001-1v-7.5a5.507 5.507 0 00-5.5-5.5zm3.5 12h-2v-4.5a3 3 0 00-6 0v4.5h-2v-10h2v.703a1 1 0 001.781.625A3.483 3.483 0 0121 14.499v6.5zm-14-12H3a1 1 0 00-1 1v12a1 1 0 001 1h4a.998.998 0 001-1v-12a1 1 0 00-1-1zm-1 12H4v-10h2v10zM5.015 1.542a3.233 3.233 0 10-.057 6.457h.028a3.234 3.234 0 10.029-6.457zm-.029 4.457h-.028a1.222 1.222 0 01-1.37-1.229c0-.746.56-1.228 1.427-1.228A1.234 1.234 0 016.41 4.77C6.411 5.517 5.851 6 4.986 6z'
				fill={fillColor}
			/>
		</svg>
	);
};
