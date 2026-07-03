import { createContext, useState } from 'react'

export const ThemeContaxt = createContext(null);
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light"? "dark" : "light"));
    };
    return (
        <ThemeContaxt.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContaxt.Provider>
    )
}

