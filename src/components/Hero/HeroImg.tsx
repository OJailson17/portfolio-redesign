import { Box } from '@chakra-ui/react';
import React from 'react';

export const HeroImg = () => {
	return (
		<Box
			position={'relative'}
			maxWidth={545}
			width={['100%', '100%', '100%', '100%']}
			height={'496px'}
		>
			{/* Back */}
			<Box
				position={'absolute'}
				width={['62%', '62%', '75%', '75%', '62%']}
				height={['80%', '80%', '60%', '70%', '80%']}
				left={'20%'}
				top={'16%'}
				background={'#7E74F1'}
				borderRadius={'16px'}
				transform={'rotate(-11deg)'}
			/>

			{/* Front */}
			<Box
				position={'absolute'}
				width={['61%', '61%', '75%', '74%', '61%']}
				height={['80%', '80%', '60%', '70%', '80%']}
				left={'22%'}
				top={'15%'}
				background={'#EAE6FE'}
				borderRadius={'16px'}
			>
				<Box
					position={'absolute'}
					left={'0'}
					right={'27%'}
					top={'40%'}
					bottom={'0%'}
					backgroundImage={'/assets/hero-profile.avif'}
					backgroundRepeat='no-repeat'
					objectFit={'cover'}
					backgroundSize='contain'
					borderLeftRadius={'16px'}
				/>
			</Box>
		</Box>
	);
};
