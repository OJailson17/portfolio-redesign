import { Input } from '@chakra-ui/react';

interface InputComponentProps {
	placeholder: string;
}

export const InputComponent = ({ placeholder }: InputComponentProps) => {
	return (
		<Input
			placeholder={placeholder}
			mt={4}
			maxW={'600px'}
			height={'48px'}
			borderColor={'#656D72'}
			focusBorderColor={'#7E74F1'}
			_hover={{
				borderColor: '#7E74F1',
			}}
		/>
	);
};
