import React from 'react';

export const HeroImg = () => {
	return (
		<div className='relative max-w-[545px] w-full h-[496px]'>
			{/* Back */}
			<div className='absolute w-[62%] h-[80%] left-[20%] top-[16%] bg-[#7E74F1] rounded-2xl -rotate-[11deg] md:w-[75%] md:h-[60%] lg:w-[75%] lg:h-[70%] xl:w-[62%] xl:h-[80%]' />

			{/* Front */}
			<div className='absolute w-[61%] h-[80%] left-[22%] top-[15%] bg-[#EAE6FE] rounded-2xl md:w-[75%] md:h-[60%] lg:w-[74%] lg:h-[70%] xl:w-[61%] xl:h-[80%]'>
				<div className='absolute left-0 right-[27%] top-[40%] bottom-0 bg-hero-image bg-no-repeat object-cover bg-contain rounded-l-2xl' />
			</div>
		</div>
	);
	// return (
	// 	<div className='relative max-w-[545] w-full h-[496px]'>
	// 		{/* Back */}
	// 		<div className='absolute w-[75%] h-[60%] md:w-[62%] md:h-[80%] lg:w-[75%] lg:h-[70%] xl:w-[62%] xl:h-[80%] left-[20%] top-[16%] bg-[#7E74F1] rounded-2xl transform rotate-[-11deg]' />

	// 		{/* Front */}
	// 		<div className='absolute w-[75%] h-[60%] md:w-[61%] md:h-[80%] lg:w-[74%] lg:h-[70%] xl:w-[61%] xl:h-[80%] left-[22%] top-[15%] bg-[#EAE6FE] rounded-2xl'>
	// 			<div className='absolute left-0 right-[27%] top-[40%] bottom-0 bg-hero-image bg-no-repeat bg-contain border-l-2 rounded-l-2xl' />
	// 		</div>
	// 	</div>
	// );
};
