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
		>
			<div>
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

			<div>
				<p>{project.name}</p>

				<div>
					{project.techs.map(tech => (
						<p key={tech}>{tech}</p>
					))}
				</div>

				<div>
					<Link href={project.demo || project.code} target='_blank'>
						<button>
							<p>Demo</p>
						</button>
					</Link>
					<Link href={project.code} target='_blank'>
						<button>
							<p>Código</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
