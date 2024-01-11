import { faBars, faCalendarCheck, faCalendarMinus, faCubes, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

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
// eslint-disable-next-line react/prop-types
const Header = ({ toggleDrawer }) => {

    const [AvataranchorEl, setAvataranchorEl] = useState(null)
    const [BarAnchorEl, setBarAnchorEl] = useState(null)
    const [itemOpener, setItemOpener] = useState(null)

    const handleAvatarMenuOpen = (event) => {
        setAvataranchorEl(event.currentTarget)
    }

    const handleMenuBarOpen = (event, name) => {
        setItemOpener(name)
        setBarAnchorEl(event.currentTarget)
    }

    const handleMenuBarClose = () => {
        setBarAnchorEl(null)
        setItemOpener(null)
    }

    const handleLogout = () => {

    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button sx={{ color: 'white', display: 'block' }} onClick={() => toggleDrawer(true)}>
                    <FontAwesomeIcon size="2xl" icon={faBars} />
                </Button>
                <Typography variant="h5" sx={{ mx: 1, flexGrow: 1 }}>Logo</Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((item, index) => (
                        <div key={index}>
                            {item.link ? (
                                <Button sx={{ color: 'white', }} href={item.link}>
                                    <FontAwesomeIcon size="2xl" icon={item.icon} />
                                    <Typography sx={{ mx: 1 }} variant="subtitle1">{item.name}</Typography>
                                </Button>
                            ) : (
                                <>
                                    <Button sx={{ color: 'white', }} onClick={(event) => handleMenuBarOpen(event, item.name)} >
                                        <FontAwesomeIcon size="2xl" icon={item.icon} />
                                        <Typography sx={{ mx: 1 }} variant="subtitle1">{item.name}</Typography>
                                    </Button>
                                    <Menu
                                        anchorEl={BarAnchorEl}
                                        open={itemOpener === item.name}
                                        onClose={handleMenuBarClose}

                                    >
                                        {item.child.map((itemMenu, index) => (
                                            <MenuItem component='a' href={itemMenu.link} key={index}>
                                                <Typography textAlign='center'>{itemMenu.name}</Typography>
                                            </MenuItem>
                                        ))}

                                    </Menu>
                                </>
                            )}
                        </div>
                    ))}
                </Box>
                <Box sx={{ mx: 1 }}>
                    {/* this available when not login
                <Button sx={{color:'white', mx:2}}>Login</Button> */}
                    <IconButton onClick={handleAvatarMenuOpen}>
                        <Avatar>R</Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={AvataranchorEl}
                        open={Boolean(AvataranchorEl)}
                        onClose={() => setAvataranchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                    >
                        <MenuItem onClick={handleLogout}>
                            <Typography textAlign='center'>Log Out</Typography>
                        </MenuItem>
                    </Menu>
                </Box>

            </Toolbar>
        </AppBar>
    )
};

export default Header;
