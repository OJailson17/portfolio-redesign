'use client';

import { useEffect, useState } from 'react';

export const PrivacyConsentPopup = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem('privacy-consent');
		if (!consent) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('privacy-consent', 'true');
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className='fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500'>
			<div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl shadow-2xl bg-white/90 dark:bg-dark-project-background/90 backdrop-blur-md border border-gray-200 dark:border-gray-800'>
				<div className='flex-1 text-center md:text-left'>
					<p className='text-sm md:text-base text-light-text dark:text-dark-text font-medium'>
						Este site utiliza cookies para análises e para melhorar sua
						experiência de navegação. Ao continuar, você concorda com o uso
						dessas tecnologias.
					</p>
				</div>

				<div className='flex items-center gap-4 shrink-0'>
					<button
						onClick={handleAccept}
						className='px-6 py-2.5 rounded-xl bg-light-primary dark:bg-dark-primary text-white font-semibold text-sm hover:opacity-90 transition-all active:scale-95 shadow-md shadow-light-primary/20 dark:shadow-dark-primary/20'
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};
