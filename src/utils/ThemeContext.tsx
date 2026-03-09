import React, { useContext, useEffect, useState } from "react";
import { colortheme, ThemeContextType } from "./types";
export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const[theme, setTheme] = useState<colortheme>("light");

    const toggleTheme = () => {
        setTheme((prev)=> prev === "light" ? "dark": "light")
    }
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // save the theme in local storage
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") as colortheme | null;
        if(savedTheme){
            setTheme(savedTheme);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

// custom hook
export const useTheme = () =>{
   const context = useContext(ThemeContext);
   if(context === null){
    throw new Error("useTheme must be used within a ThemeProvider");
   }
   return context;
}