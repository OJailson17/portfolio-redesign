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
			id='contato'
			ref={ref}
			style={{
				transform: isInView ? 'none' : 'translateX(-200px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
			}}
		>
			<SectionTitle title='Quer me contratar?' subtitle='Contato' />

			<div>
				<div onSubmit={handleSubmit(handleSendEmail)}>
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

					<form>
						<textarea placeholder='Mensagem' {...register('message')} />
						<span>{errors?.message?.message}</span>
					</form>

					<button type='submit'>
						<p>Enviar</p>
					</button>
				</div>

				<div>
					<p>
						Se você gostou do meu trabalho e quer me contratar para um projeto
						seu, ou até mesmo para sua empresa, ficarei feliz em trabalharmos
						juntos. Fique a vontade e me mande uma mensagem através do
						formulário. Se preferir, também pode entrar em contato através do
						email
					</p>

					<div>
						<div>
							<Image src={'/assets/mail.svg'} alt='' width={24} height={24} />
						</div>
						<p>jaylsono17@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};
