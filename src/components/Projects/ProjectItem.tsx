import Image from 'next/image';

import Link from 'next/link';

export interface Project {
	name: string;
	techs: string[];
	demo?: string;
	code: string;
	imageUrl: string;
}
interface ProjectItemProps {
	project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
	return (
		<div className='max-w-[360px] rounded-lg bg-light-project-background dark:bg-dark-project-background'>
			<div className='w-full h-[250px] rounded-lg relative'>
				<Image
					src={project.imageUrl}
					alt='Screenshot do projeto'
					fill
					style={{
						objectFit: 'cover',
						borderRadius: '8px',
					}}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					// priority={
					// 	project.imageUrl.indexOf('food-delivery') !== -1 ? true : false
					// }
					loading='lazy'
				/>
			</div>

			<div className='px-4'>
				<p className='mt-4 font-medium text-light-text font-jakarta dark:text-dark-text'>
					{project.name}
				</p>

				<div className='flex gap-4 mt-4 flex-wrap break-words whitespace-normal'>
					{project.techs.map(tech => (
						<p
							key={tech}
							className='text-sm text-light-label font-medium dark:text-dark-label'
						>
							{tech}
						</p>
					))}
				</div>

				<div className='mt-4 mb-4 flex items-center gap-4'>
					<Link href={project.demo || project.code} target='_blank'>
						<button
							className='min-w-[40px] h-10 px-4 rounded-md bg-light-button-background hover:brightness-90 dark:bg-dark-button-background'
							tabIndex={-1}
						>
							<p className='text-sm text-light-text font-medium dark:text-dark-text'>
								Demo
							</p>
						</button>
					</Link>

					{project.code.length > 0 && (
						<Link href={project.code} target='_blank'>
							<button
								className='min-w-[40px] h-10 px-4 rounded-md bg-light-button-background hover:brightness-90 dark:bg-dark-button-background'
								tabIndex={-1}
							>
								<p className='text-sm font-medium text-light-text dark:text-dark-text'>
									Código
								</p>
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
