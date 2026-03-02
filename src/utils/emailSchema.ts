export const emailSchemaText = (
	name: string,
	email: string,
	message: string,
) => {
	return `
New message received from my portfolio:

--------------------------------------------------
Sender: ${name}
Email: ${email}
--------------------------------------------------

Message:
${message}

--------------------------------------------------
Sent via contact form.
    `.trim();
};

export const emailSchemaHTML = (
	name: string,
	email: string,
	message: string,
) => {
	const primaryColor = '#7E74F1';
	const bgColor = '#F9F9FF';
	const textColor = '#232E35';
	const labelColor = '#717070';

	return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: ${bgColor}; padding: 40px 20px; color: ${textColor}; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #eef0f7;">
        <div style="background-color: ${primaryColor}; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Portfolio Message</h1>
        </div>
        <div style="padding: 32px;">
          <div style="margin-bottom: 24px;">
            <p style="margin: 0; font-size: 12px; color: ${labelColor}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Sender</p>
            <p style="margin: 4px 0 0; font-size: 18px; font-weight: 600; color: ${textColor};">${name}</p>
          </div>
          <div style="margin-bottom: 24px;">
            <p style="margin: 0; font-size: 12px; color: ${labelColor}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: ${primaryColor}; font-weight: 500;">
              <a href="mailto:${email}" style="color: ${primaryColor}; text-decoration: none;">${email}</a>
            </p>
          </div>
          <div style="border-top: 1px solid #eef0f7; padding-top: 24px;">
            <p style="margin: 0; font-size: 12px; color: ${labelColor}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <div style="margin-top: 12px; padding: 16px; background-color: #fcfcff; border-radius: 8px; border-left: 4px solid ${primaryColor};">
              <p style="margin: 0; font-size: 16px; color: ${textColor}; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
        <div style="background-color: #fcfcff; padding: 20px; text-align: center; border-top: 1px solid #eef0f7;">
          <p style="margin: 0; font-size: 12px; color: ${labelColor};">This message was sent through the contact form of my portfolio.</p>
        </div>
      </div>
    </div>
  `;
};
