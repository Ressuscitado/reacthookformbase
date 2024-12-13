import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "themeContextKey";

type ThemeContext = {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Usamos o estado local para armazenar o tema
    const [theme, setTheme] = useState<string>("light");

    // Este useEffect só será executado no cliente, após a renderização inicial
    useEffect(() => {
        // Acessamos o localStorage apenas no cliente
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Este useEffect é responsável por atualizar o localStorage sempre que o tema mudar
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
