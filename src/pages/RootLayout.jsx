import { useEffect, useState } from "react"
import DrawerLeft from "../components/DrawerLeft"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { Box, ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "../utilities/themePelette"
import { useSelector } from "react-redux"

const RootLayout = () => {
    const [drawerState, setDrawerState] = useState(false)
    const { isDarkMode } = useSelector(state => state.themes)

    const toggleDrawer = (state) => {
        setDrawerState(state)
    }
    useEffect(() => {
        console.log('time');
    }, [])
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Header toggleDrawer={toggleDrawer} />
            <DrawerLeft drawerStates={{ drawerState, toggleDrawer }} />
            <Box sx={{ bgcolor: 'background.default' }}>
                <Outlet />
            </Box>
        </ThemeProvider>

    )
}

export default RootLayout