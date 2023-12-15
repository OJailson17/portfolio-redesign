'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Image from 'next/image';
import * as yup from 'yup';

import { SectionTitle } from '../SectionTitle';
import { InputComponent } from './InputComponent';
import { onSendEmail } from './submitEmail';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

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

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			id='contact'
			ref={ref}
			// style={{
			// 	transform: isInView ? 'none' : 'translateX(-200px)',
			// 	opacity: isInView ? 1 : 0,
			// 	transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
			// }}
			className='max-w-[1600px] w-[85%] mx-auto mt-36'
		>
			<SectionTitle title='Quer me contratar?' subtitle='Contato' />

			<div className='mt-14 flex items-start justify-between flex-col-reverse gap-10 lg:items-center lg:gap-0 md:flex-row'>
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
							className='mt-4 w-full rounded-md px-4 py-2 max-w-[600px] h-48 bg-transparent border-[1px] border-[#656D72] resize-none text-text font-normal outline-none focus:border-primary focus:border-2 hover:border-primary'
						/>
						<span className='text-red-500 block'>
							{errors?.message?.message}
						</span>
					</div>

					<button
						type='submit'
						className='w-full max-w-[600px] h-12 mt-6 bg-primary rounded-md hover:brightness-75'
					>
						<p className='text-[#F5F3FE] text-sm font-medium'>Enviar</p>
					</button>
				</form>

				<div className='w-full md:w-[70%] lg:w-[40%]'>
					<p className='text-text'>
						Se você gostou do meu trabalho e quer me contratar para um projeto
						seu, ou até mesmo para sua empresa, ficarei feliz em trabalharmos
						juntos. Fique a vontade e me mande uma mensagem através do
						formulário. Se preferir, também pode entrar em contato através do
						email
					</p>

					<div className='mt-4 flex gap-4'>
						<div>
							<Image src={'/assets/mail.svg'} alt='' width={24} height={24} />
						</div>
						<p className='text-sm font-normal text-label'>
							jaylsono17@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
