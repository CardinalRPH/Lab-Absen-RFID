import { useEffect, useState } from "react"
import DrawerLeft from "../components/DrawerLeft"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { useThemeState } from "../hooks/ThemeState"
import { ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "../utilities/themePelette"

const RootLayout = () => {
    const [drawerState, setDrawerState] = useState(false)
    const { isDarkMode } = useThemeState()

    const toggleDrawer = (state) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }

        setDrawerState(state)
    }
    useEffect(() => {
        console.log('time');
    }, [])
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Header toggleDrawer={toggleDrawer} />
            <DrawerLeft drawerStates={{ drawerState, toggleDrawer }} />
            <Outlet />
        </ThemeProvider>

    )
}

export default RootLayout