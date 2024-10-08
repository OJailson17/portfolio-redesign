'use client';

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

interface ThemeContextProviderProps {
	children: ReactNode;
}

export type Theme = 'light' | 'dark' | null;

interface ThemeContextProps {
	theme: Theme;
	changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider = ({
	children,
}: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<Theme>(null);

	// If theme is dark, change to light, if it's light change it to dark
	const changeTheme = () => {
		!theme || theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	// get theme from local storage and set to theme state
	useEffect(() => {
		const getTheme = localStorage.getItem('@portfolio:theme') as Theme;

		if (!getTheme) {
			localStorage.setItem('@portfolio:theme', 'dark');
			return;
		}

		setTheme(getTheme);
	}, []);

	// set the theme state value to local storage
	useEffect(() => {
		// if (window) {
		if (theme === 'light') {
			document.documentElement.classList.remove('dark');
			// document.documentElement.classList.add('light');
		} else {
			if (document.documentElement.classList.contains('dark')) {
				document.documentElement.classList.remove('dark');
			}

			document.documentElement.classList.add('dark');
		}
		// }
		localStorage.setItem('@portfolio:theme', theme || '');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
