import { useEffect, useState } from "react"
import DrawerLeft from "../components/DrawerLeft"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { Box, ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "../utilities/themePelette"
import { useDispatch, useSelector } from "react-redux"
import DialogAlertMain from "../components/DialogAlertMain"
import { enLang, idLang } from "../utilities/LanguageTextConfig"
import { authAction } from "../stores/authState"
import useWebSocket from "react-use-websocket"
import { webSocketURI } from "../config/originConfig"
import { useGet } from "../hooks/dataHandler"
import { timeAction } from "../stores/timeState"

const RootLayout = () => {
    const [drawerState, setDrawerState] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const { isDarkMode } = useSelector(state => state.themes)
    const { timeStamp } = useSelector(state => state.cTimeStamp)
    const { isEnLang } = useSelector(state => state.languages)
    const { data: data2, error: error2 } = useGet("time")
    const language = isEnLang ? enLang : idLang
    const dispatch = useDispatch()
    const { lastMessage } = useWebSocket(webSocketURI)

    const toggleDrawer = (state) => {
        setDrawerState(state)
    }

    const handleDialonAcc = () => {
        dispatch(authAction.logout())
        setDialogOpen(false)
    }

    useEffect(() => {
        if (timeStamp) {
            const currentTimestamp = Date.now()
            const currentDate_t = new Date(currentTimestamp);
            const diffDate = new Date(timeStamp).getTime() - currentDate_t.getTime()

            const intervalId = setInterval(() => {
                const now = new Date();
                const nextUpdate = now.getTime() + diffDate
                dispatch(timeAction.setTimeStamp(nextUpdate))

            }, 1000);
            return () => clearInterval(intervalId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeStamp])

    useEffect(() => {
        if (data2) {
            dispatch(timeAction.setTimeStamp(data2.data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data2])

    useEffect(() => {
        if (error2) {
            console.error(error2);
        }
    }, [error2])

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Header toggleDrawer={toggleDrawer} setDialogOpen={setDialogOpen} />
            <DrawerLeft drawerStates={{ drawerState, toggleDrawer }} setDialogOpen={setDialogOpen} />
            <Box sx={{ bgcolor: 'background.default' }}>
                <Outlet context={{ lastMessage }} />
            </Box>
            <DialogAlertMain
                dialogLabel="Log Out"
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                handleAccept={handleDialonAcc}
                handleCancle={() => setDialogOpen(false)}

            >
                {language.sureLogOut}

            </DialogAlertMain>
        </ThemeProvider>

    )
}

export default RootLayout