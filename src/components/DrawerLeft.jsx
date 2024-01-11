/* eslint-disable react/prop-types */
import { faCalendarCheck, faCalendarMinus, faCubes, faLanguage, faMoon, faQrcode, faRightFromBracket, faSun, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Box, Collapse, Container, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { themeAction } from "../stores/themeState"

const pages = [
    {
        name: 'Beranda',
        icon: faCubes,
        link: '/home'
    },
    {
        name: 'Asisten',
        icon: faUsers,
        link: '/asisten'
    },
    {
        name: 'Presensi Asisten',
        icon: faCalendarCheck,
        link: '/presensi/asisten'
    },
    {
        name: 'Presensi CALAS',
        icon: faCalendarCheck,
        link: '/presensi/calas'
    },
    {
        name: 'Izin',
        icon: faCalendarMinus,
        link: '#'
    }
]

const DrawerLeft = ({ drawerStates }) => {
    const [collapseState, setCollapseState] = useState(null)
    const { drawerState = false, toggleDrawer } = drawerStates
    const dispatch = useDispatch()
    const { isDarkMode } = useSelector(state => state.themes)

    const handleCollapseOpen = (name) => {
        collapseState ? setCollapseState(null) : setCollapseState(name)
    }
    return (
        <div>
            <Fragment>
                <Drawer
                    anchor="left"
                    onClose={() => toggleDrawer(false)}
                    open={drawerState}
                >
                    <Box sx={{ width: 250 }}>
                        {/* container should background image */}
                        <Container sx={{ backgroundColor: '#1976D2', height: 150, alignItems: 'flex-end', display: 'flex' }} maxWidth="sm">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemAvatar>
                                        <Avatar>R</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={'Roki Gerung'} secondary={'roki@gerung.com'} />
                                </ListItem>
                            </List>
                        </Container>
                        <List sx={{ display: { xs: 'block', md: 'none' } }}>
                            {pages.map((item, index) => (
                                <div key={index}>
                                    {item.link ? (
                                        <ListItem>
                                            <ListItemButton href={item.link}>
                                                <ListItemIcon>
                                                    <FontAwesomeIcon size="xl" icon={item.icon} />
                                                </ListItemIcon>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ) : (
                                        <>
                                            <ListItem>
                                                <ListItemButton onClick={() => handleCollapseOpen(item.name)}>
                                                    <ListItemIcon>
                                                        <FontAwesomeIcon size="xl" icon={item.icon} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.name} />
                                                </ListItemButton>
                                            </ListItem>
                                            <Collapse in={collapseState === item.name} timeout="auto" unmountOnExit>
                                                <List>
                                                    {item.child.map((childItem, index) => (
                                                        <ListItem key={index}>
                                                            <ListItemButton href={childItem.link}>
                                                                <ListItemText primary={childItem.name} />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        </>

                                    )}
                                </div>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FontAwesomeIcon size="xl" icon={faQrcode} />
                                    </ListItemIcon>
                                    <ListItemText primary='RFID Devices' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FontAwesomeIcon size="xl" icon={faLanguage} />
                                    </ListItemIcon>
                                    <ListItemText primary='English Language' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={() => dispatch(themeAction.setDarkMode(!isDarkMode))}>
                                    <ListItemIcon>
                                        <FontAwesomeIcon size="xl" icon={isDarkMode ? faSun : faMoon} />
                                    </ListItemIcon>
                                    <ListItemText primary={`${isDarkMode ? 'Light' : 'Dark'} Theme`} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FontAwesomeIcon size="xl" icon={faRightFromBracket} />
                                    </ListItemIcon>
                                    <ListItemText primary='Log Out' />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Box>
                </Drawer>

            </Fragment>
        </div>
    )
}

export default DrawerLeft