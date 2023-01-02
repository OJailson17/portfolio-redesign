import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
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
		<FormControl isInvalid={!!error}>
			<Input
				placeholder={placeholder}
				mt={4}
				maxW={'600px'}
				height={'48px'}
				color={'text'}
				borderColor={'#656D72'}
				focusBorderColor={'#7E74F1'}
				_hover={{
					borderColor: '#7E74F1',
				}}
				ref={ref}
				{...rest}
			/>
			<FormErrorMessage>{error?.message}</FormErrorMessage>
		</FormControl>
	);
};

export const InputComponent = forwardRef(InputBase);
