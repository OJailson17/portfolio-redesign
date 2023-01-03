import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	Text,
	Textarea,
	useBreakpointValue,
	useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SectionTitle } from '../SectionTitle';
import { InputComponent } from './InputComponent';

import * as yup from 'yup';
import { onSendEmail } from './submitEmail';

export interface FormDataProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const schema = yup.object({
	name: yup
		.string()
		.min(3, 'Mínimo de 3 caracteres')
		.trim()
		.required('Campo obrigatório'),
	email: yup
		.string()
		.email('Email precisa ser válido')
		.trim()
		.required('Campo obrigatório'),
	subject: yup
		.string()
		.min(3, 'Mínimo de 3 caracteres')
		.trim()
		.required('Campo obrigatório'),
	message: yup
		.string()
		.min(3, 'Mínimo de 3 caracteres')
		.trim()
		.required('Campo obrigatório'),
});

export const Contact = () => {
	const toast = useToast();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormDataProps>({
		resolver: yupResolver(schema),
	});

	// call the function to send the email
	const handleSendEmail = async (data: FormDataProps) => {
		await onSendEmail({ data, reset, toast });
	};

	return (
		<Box
			as='section'
			id='contato'
			mt={36}
			paddingInline={['30px', '30px', '50px', '50px', '120px']}
		>
			<SectionTitle title='Quer me contratar?' subtitle='Contato' />

			<Flex
				mt={14}
				align={['flex-start', 'flex-start', 'flex-start', 'center']}
				justify={'space-between'}
				direction={!isWideVersion ? 'column-reverse' : 'row'}
				gap={!isWideVersion ? 10 : 0}
			>
				<Box
					as='form'
					width={['100%', '100%', '90%', '50%', '50%']}
					onSubmit={handleSubmit(handleSendEmail)}
				>
					<InputComponent
						placeholder='Nome'
						{...register('name')}
						error={errors?.name}
					/>
					<InputComponent
						placeholder='Email'
						{...register('email')}
						error={errors?.email}
					/>
					<InputComponent
						placeholder='Assunto'
						{...register('subject')}
						error={errors?.subject}
					/>

					<FormControl isInvalid={!!errors.message}>
						<Textarea
							placeholder='Mensagem'
							resize='none'
							mt={4}
							maxW={600}
							height={48}
							borderColor={'label'}
							color={'text'}
							focusBorderColor={'primary'}
							_hover={{
								borderColor: 'primary',
							}}
							{...register('message')}
						/>
						<FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
					</FormControl>

					<Button
						type='submit'
						width={'100%'}
						height={49}
						mt={6}
						background={'primary'}
						_hover={{
							filter: 'brightness(80%)',
						}}
						isLoading={isSubmitting}
					>
						<Text color={'#F5F3FE'} fontSize={14} fontWeight={'medium'}>
							Enviar
						</Text>
					</Button>
				</Box>

				<Box width={['100%', '100%', '70%', '40%', '40%']}>
					<Text color={'text'}>
						Se você gostou do meu trabalho e quer me contratar para um projeto
						seu, ou até mesmo para sua empresa, ficarei feliz em trabalharmos
						juntos. Fique a vontade e me mande uma mensagem através do
						formulário. Se preferir, também pode entrar em contato através do
						email
					</Text>

					<Flex mt={4} gap={4}>
						<Box>
							<Image src={'/assets/mail.svg'} alt='' width={24} height={24} />
						</Box>
						<Text fontSize={14} fontWeight={'normal'} color={'label'}>
							jaylsono17@gmail.com
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};
