'use client';

import { InputComponent } from './InputComponent';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
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
		.required('Campo obrigatório')
		.min(3, 'Mínimo de 3 caracteres')
		.trim(),
	email: yup
		.string()
		.required('Campo obrigatório')
		.email('Email precisa ser válido')
		.trim(),
	subject: yup
		.string()
		.required('Campo obrigatório')
		.min(3, 'Mínimo de 3 caracteres')
		.trim(),
	message: yup
		.string()
		.required('Campo obrigatório')
		.min(3, 'Mínimo de 3 caracteres')
		.trim(),
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
		const sendEmail = await fetch('/api/email', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		const response = await sendEmail.json();

		if (response.error) {
			console.log(response.error);

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
				className='w-full md:w-full'
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
					className='w-full max-w-[600px] h-12 mt-6 bg-dark-primary rounded-md hover:brightness-75 outline-none focus:border-light-text focus:border-2 dark:focus:border-dark-text'
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
