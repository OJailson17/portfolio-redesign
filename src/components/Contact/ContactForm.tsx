'use client';

import { InputComponent } from './InputComponent';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { onSendEmail } from '../../app/actions/sendEmail';
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from '../../context/themeContext';
import { ImSpinner2 } from 'react-icons/im';

import 'react-toastify/dist/ReactToastify.css';

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
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormDataProps>({
		resolver: yupResolver(schema),
	});

	const { theme } = useTheme();

	// call the function to send the email
	const handleSendEmail = async (data: FormDataProps) => {
		const emailResponse = await onSendEmail(data);

		if (emailResponse.error) {
			console.log(emailResponse.error);

			return toast('Erro! sua mensagem não foi enviada. Tente novamente', {
				position: 'top-center',
				theme: !theme || theme === 'dark' ? 'dark' : 'light',
				type: 'error',
				autoClose: 5000,
			});
		}

		toast('Mensagem enviada com sucesso!', {
			position: 'top-center',
			theme: !theme || theme === 'dark' ? 'dark' : 'light',
			type: 'success',
			autoClose: 5000,
		});

		reset();
	};

	return (
		<>
			<ToastContainer />
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
					className='w-full max-w-[600px] h-12 mt-6 bg-dark-primary rounded-md hover:brightness-75'
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<ImSpinner2 className='animate-spin text-white mx-auto text-lg' />
					) : (
						<p className='text-white text-lg font-large'>Enviar</p>
					)}
				</button>
			</form>
		</>
	);
};
