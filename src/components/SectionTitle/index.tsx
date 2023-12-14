interface SectionTitleProps {
	title: string;
	subtitle: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
	return (
		<>
			<div>
				<div />
				<p>{subtitle}</p>
			</div>

			<p>{title}</p>
		</>
	);
};
