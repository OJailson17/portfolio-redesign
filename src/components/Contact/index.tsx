import { SectionTitle } from '../SectionTitle';
import { MailIcon } from '../Icons/Mail';
import { ContactForm } from './ContactForm';

export const Contact = () => {
	return (
		<section id='contact' className='max-w-[1600px] w-[85%] mx-auto mt-36'>
			<SectionTitle title='Quer me contratar?' subtitle='Contato' />

			<div className='mt-14 flex items-start justify-between flex-col-reverse gap-10 lg:items-center lg:gap-0 md:flex-row'>
				<ContactForm />

				<div className='w-full md:w-[70%] lg:w-[40%]'>
					<p className='text-light-text dark:text-dark-text'>
						Se você gostou do meu trabalho e quer me contratar para um projeto
						seu, ou até mesmo para sua empresa, ficarei feliz em trabalharmos
						juntos. Fique a vontade e me mande uma mensagem através do
						formulário. Se preferir, também pode entrar em contato através do
						email
					</p>
					<div className='mt-4 flex gap-4'>
						<div>
							<MailIcon />
						</div>
						<p className='text-sm font-normal text-light-label dark:text-dark-label'>
							jaylsono17@gmail.com
						</p>
					</div>
					C
				</div>
			</div>
		</section>
	);
};
