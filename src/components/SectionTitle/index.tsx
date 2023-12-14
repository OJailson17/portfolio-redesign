interface SectionTitleProps {
	title: string;
	subtitle: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
	return (
		<>
			<div className='flex items-center gap-4'>
				<div className='w-1 h-[0.5px] bg-[#D9D9D9]' />
				<p className='font-medium text-xs tracking-[7.5px] leading-6 text-label uppercase'>
					{subtitle}
				</p>
			</div>

			<p className='font-bold text-4xl mt-2 text-text'>{title}</p>
		</>
	);
};
