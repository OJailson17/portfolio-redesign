interface TechComponentProps {
	tech: string;
	level: string;
}

export const TechComponent = ({ tech, level }: TechComponentProps) => {
	return (
		<div>
			<p>{tech}</p>

			<div>
				<div />
			</div>
		</div>
	);
};
