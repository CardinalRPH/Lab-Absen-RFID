import { createContext, useContext, useState } from "react";

const ThemeStateContext = createContext()

const getThemeLocalStorage = () => {
    const getLocalStorage = localStorage.getItem('theme')
    return getLocalStorage === null ? false : JSON.parse(getLocalStorage).isDarkMode
}

const saveThemeLocalStorage = (value) => {
    const theme = { isDarkMode: value }
    localStorage.setItem('theme', JSON.stringify(theme))
}

// eslint-disable-next-line react/prop-types
export const ThemeStateProvider = ({ children }) => {
    const [isDarkMode, _setIsDarkMode] = useState(getThemeLocalStorage())

    const setIsDarkMode = (value) => {
        _setIsDarkMode(value)
        saveThemeLocalStorage(value)
    }
    return (
        <ThemeStateContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </ThemeStateContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeState = () => {
    return useContext(ThemeStateContext)
}