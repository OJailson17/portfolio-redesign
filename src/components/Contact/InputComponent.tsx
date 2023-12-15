// 'use client';

import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputComponentProps {
	placeholder: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<
	HTMLInputElement,
	InputComponentProps
> = ({ placeholder, error, ...rest }, ref) => {
	return (
		<div>
			<input
				placeholder={placeholder}
				ref={ref}
				{...rest}
				className='mt-4 w-full rounded-md px-4 py-2  max-w-[600px] h-12 bg-transparent border-[1px] border-[#656D72] resize-none text-text font-normal outline-none focus:border-primary focus:border-2 hover:border-primary'
			/>
			<span className='text-red-500 block mt-2'>{error?.message}</span>
		</div>
	);
};

export const InputComponent = forwardRef(InputBase);
