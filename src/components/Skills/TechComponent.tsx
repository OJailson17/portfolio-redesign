import classNames from 'classnames';
import clsx from 'clsx';

interface TechComponentProps {
	tech: string;
	level: string;
}

export const TechComponent = ({ tech, level }: TechComponentProps) => {
	const dynamicClass = classNames(
		`w-[50%]`,
		'h-2',
		'bg-[#7E74F1]',
		'rounded-full',
	);

	return (
		<div className='w-full'>
			<p className='font-medium text-sm text-light-text font dark:text-dark-text'>
				{tech}
			</p>

			<div className='max-w-[300px] h-2 mt-3 bg-[#cfd7db] rounded-full'>
				<div
					className={'h-2 bg-[#7E74F1] rounded-full'}
					style={{ width: `${level}` }}
				/>
			</div>
		</div>
	);
};
