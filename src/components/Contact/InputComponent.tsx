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
		<form>
			<input placeholder={placeholder} ref={ref} {...rest} />
			<span>{error?.message}</span>
		</form>
	);
};

export const InputComponent = forwardRef(InputBase);
