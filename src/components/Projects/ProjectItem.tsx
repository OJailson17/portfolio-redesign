'use client';

import Image from 'next/image';

import Link from 'next/link';
import { useRef } from 'react';

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
	const ref = useRef(null);

	return (
		<div
			ref={ref}
			// style={{
			// 	transform: isInView ? 'none' : 'translateX(-200px)',
			// 	opacity: isInView ? 1 : 0,
			// 	transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
			// }}
			className='max-w-[360px] rounded-lg bg-projectBackground'
		>
			<div className='w-full h-[250px] rounded-lg relative'>
				<Image
					// as={Image}
					src={project.imageUrl}
					alt=''
					fill
					style={{
						objectFit: 'cover',
						borderRadius: '8px',
					}}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					priority={
						project.imageUrl.indexOf('food-delivery') !== -1 ? true : false
					}
				/>
			</div>

			<div className='px-4'>
				<p className='mt-4 font-medium text-text font-jakarta'>
					{project.name}
				</p>

				<div className='flex gap-4 mt-4 flex-wrap break-words whitespace-normal'>
					{project.techs.map(tech => (
						<p key={tech} className='text-sm text-label font-medium'>
							{tech}
						</p>
					))}
				</div>

				<div className='mt-4 mb-4 flex items-center gap-4'>
					<Link href={project.demo || project.code} target='_blank'>
						<button
							className='min-w-[40px] h-10 px-4 rounded-md bg-buttonBackground hover:brightness-90'
							tabIndex={-1}
						>
							<p className='text-sm text-text font-medium'>Demo</p>
						</button>
					</Link>
					<Link href={project.code} target='_blank'>
						<button
							className='min-w-[40px] h-10 px-4 rounded-md bg-buttonBackground hover:brightness-90'
							tabIndex={-1}
						>
							<p className='text-sm font-medium text-text'>Código</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
