import { Box } from '@chakra-ui/react'
import React from 'react'

export const HeroImg = () => {
  return (
    <Box
				position={'relative'}
				width={'545px'}
				height={'496px'}
				>
					{/* Back */}
					<Box
					  position={'absolute'}
						width={'341px'}
						height={'398px'}
						left={'111.88px'}
						top={'80.21px'}
						background={'#7E74F1'}
						borderRadius={'16px'}
						transform={'rotate(-11deg)'}
					 />

					 {/* Front */}
					 <Box 
					   position={'absolute'}
						 width={'336px'}
						 height={'400px'}
						 left={'123px'}
						 top={'78px'}
						 background={'#EAE6FE'}
						 borderRadius={'16px'}
					 >

						 <Box
						   position={'absolute'}
							 left={'0'}
							 right={'27%'}
							 top={'36%'}
							 bottom={'0%'}
							 backgroundImage={'/assets/hero-profile.png'}
							 backgroundRepeat='none'
							 objectFit={'cover'}
							 backgroundSize='cover'
							 borderLeftRadius={'16px'}
						  />

					 </Box>

				</Box>
  )
}
