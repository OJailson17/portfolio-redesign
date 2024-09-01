import { Theme } from '../../context/themeContext';

interface GithubIconProps {
	theme?: Theme;
}

export const GithubIcon = ({ theme = 'dark' }: GithubIconProps) => {
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
				d='M10.07 20.503a1 1 0 00-1.18-.983c-1.31.24-2.963.276-3.402-.959a5.708 5.708 0 00-1.837-2.415 1.194 1.194 0 01-.167-.109 1 1 0 00-.93-.645h-.005a1 1 0 00-1 .995c-.004.815.81 1.338 1.141 1.514.39.392.704.853.924 1.36.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 102 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377a5.64 5.64 0 00.09-.42 6.279 6.279 0 00-.408-3.293 1.003 1.003 0 00-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 00-6.354 0C6.762.751 5.455.966 5.102 1.079a.997.997 0 00-.631.584 6.3 6.3 0 00-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 00-1.256 3.83c-.003.307.012.615.043.921.334 4.602 3.334 5.984 5.424 6.459a4.592 4.592 0 00-.118.4 1 1 0 001.942.479c.064-.333.227-.64.468-.878a1 1 0 00-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.612 6.612 0 01-.033-.738A4.258 4.258 0 016.005 6.26a1 1 0 00.188-1.025 3.388 3.388 0 01-.155-.555 4.094 4.094 0 01.079-1.616c.869.246 1.687.646 2.415 1.18a1.009 1.009 0 00.827.133 11.777 11.777 0 016.173.001 1.006 1.006 0 00.83-.138 7.571 7.571 0 012.406-1.19c.133.515.162 1.051.087 1.578a3.207 3.207 0 01-.169.607 1 1 0 00.189 1.025c.077.087.154.18.223.268.606.758.926 1.706.902 2.676.002.26-.01.52-.038.777-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 00-.546 1.746c.249.245.412.563.466.908.068.268.1.544.093.82v2.334c-.01.647-.01 1.132-.01 1.355a1 1 0 102 0c0-.217 0-.692.01-1.34v-2.35a4.882 4.882 0 00-.155-1.311c-.032-.14-.07-.28-.116-.416a6.513 6.513 0 005.445-6.424A8.7 8.7 0 0022 9.203a6.13 6.13 0 00-1.263-3.826z'
				fill={fillColor}
			/>
		</svg>
	);
};