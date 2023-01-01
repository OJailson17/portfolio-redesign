import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	Text,
	Textarea,
} from '@chakra-ui/react';
import Image from 'next/image';
import { SectionTitle } from '../SectionTitle';
import { InputComponent } from './InputComponent';

export const Contact = () => {
	return (
		<Box as='section' id='contato' mt={36} paddingInline={'120px'}>
			<SectionTitle title='Quer me contratar?' subtitle='Contato' />

			<Flex mt={14} align={'center'} justify={'space-between'}>
				<FormControl width={'50%'}>
					<InputComponent placeholder='Nome' />
					<InputComponent placeholder='Email' />
					<InputComponent placeholder='Assunto' />

					<Textarea
						placeholder='Mensagem'
						resize='none'
						mt={4}
						maxW={600}
						height={48}
						borderColor={'#656D72'}
						focusBorderColor={'#7E74F1'}
						_hover={{
							borderColor: '#7E74F1',
						}}
					/>
					<Button
						width={'100%'}
						height={49}
						mt={6}
						background={'#7E74F1'}
						_hover={{
							filter: 'brightness(80%)',
						}}
					>
						<Text color={'#F5F3FE'} fontSize={14} fontWeight={'medium'}>
							Enviar
						</Text>
					</Button>
				</FormControl>

				<Box width={'40%'}>
					<Text>
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
						<Text fontSize={14} fontWeight={'normal'} color={'#656D72'}>
							jaylsono17@gmail.com
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};
