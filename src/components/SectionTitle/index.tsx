interface SectionTitleProps {
	title: string;
	subtitle: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
	return (
		<>
			<div className='flex items-center gap-4'>
				<div className='w-4 h-[2px] bg-[#E2E8F0]' />
				<p className='font-medium text-xs tracking-[7.5px] leading-6 text-label uppercase'>
					{subtitle}
				</p>
			</div>

			<p className='font-bold text-4xl mt-2 font-jakarta text-text max-sm:leading-[3rem]'>
				{title}
			</p>
		</>
	);
};
