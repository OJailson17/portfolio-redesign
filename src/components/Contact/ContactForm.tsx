'use client';

import { InputComponent } from './InputComponent';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

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

export const ContactForm = () => {
	// const toast = useToast();

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
		// await onSendEmail({ data, reset, toast });
	};

	return (
		<form
			onSubmit={handleSubmit(handleSendEmail)}
			className='w-full md:w-[90%] lg:w-1/2'
			autoComplete='off'
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

			<div>
				<textarea
					placeholder='Mensagem'
					{...register('message')}
					className='mt-4 w-full rounded-md px-4 py-2 max-w-[600px] h-48 bg-transparent border-[1px] border-[#656D72] resize-none text-light-text font-normal outline-none focus:border-light-primary focus:border-2 hover:border-light-primary dark:focus:border-dark-primary dark:hover:border-dark-primary dark:text-dark-text'
				/>
				<span className='text-red-500 block'>{errors?.message?.message}</span>
			</div>

			<button
				type='submit'
				className='w-full max-w-[600px] h-12 mt-6 bg-light-primary rounded-md hover:brightness-75 dark:bg-dark-primary'
			>
				<p className='text-[#F5F3FE] text-sm font-medium'>Enviar</p>
			</button>
		</form>
	);
};
