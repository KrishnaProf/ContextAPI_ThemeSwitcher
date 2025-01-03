import { useState,useCallback,useContext } from "react";
import { createContext } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => !prevTheme);
        document.documentElement.classList.toggle('dark')

    },[])

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export default ThemeContext;