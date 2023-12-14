import axios from 'axios';

import { FormDataProps } from '.';

type OnSubmitProps = {
	data: FormDataProps;
	reset: () => void;
	toast: (options: UseToastOptions | undefined) => void;
};

// Make the api call to send the email
export const onSendEmail = async ({ data, reset, toast }: OnSubmitProps) => {
	try {
		await axios.post('/api/email', data);

		toast({
			title: 'Mensagem Enviada',
			description:
				'Muito obrigado pelo contato. Tentarei responder o mais breve possível',
			status: 'success',
			position: 'top',
		});

		reset();
	} catch (err) {
		console.log(err);
		toast({
			title: 'Ops!',
			description:
				'Parece que houve um erro, sua mensagem não foi enviada, tente novamente ou tente direto pelo meu email indicado nessa seção ',
			status: 'error',
			position: 'top',
		});
		reset();
	}
};
