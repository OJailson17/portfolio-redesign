interface EmailProps {
	name: string;
	email: string;
	message: string;
}

export const emailSchemaText = (
	name: string,
	email: string,
	message: string,
) => {
	return `
        Nome: ${name}
        Email: ${email}
        
        Mensagem:
    
        ${message}
        `;
};

export const emailSchemaHTML = (
	name: string,
	email: string,
	message: string,
) => {
	return `
      <h1>Mensagem do portfólio</h1>
      
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <p><strong>Mensagem:</strong></p>
      
      <p>${message}</p>
      `;
};
