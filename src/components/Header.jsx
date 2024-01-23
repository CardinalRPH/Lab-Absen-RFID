import { faBars, faCalendarCheck, faCalendarMinus, faCubes, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalMain from "./Modals/ModalMain";
import LoginRenderModal from "./Modals/LoginRenderModal";
import { enLang, idLang } from "../utilities/LanguageTextConfig";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleDrawer }) => {

    const [AvataranchorEl, setAvataranchorEl] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const { isEnLang } = useSelector(state => state.languages)
    const language = isEnLang ? enLang : idLang
    const { isAuthenticated } = useSelector(state => state.auths)
    const [loginForm, setLoginForm] = useState({
        nim: '',
        password:''
        
    })

    const pages = [
        {
            name: language.home,
            icon: faCubes,
            link: '/home',
            private: !isAuthenticated
        },
        {
            name: language.assistant,
            icon: faUsers,
            link: '/asisten',
            private: !isAuthenticated
        },
        {
            name: language.assistantAtd,
            icon: faCalendarCheck,
            link: '/presensi/asisten',
            private: false
        },
        {
            name: language.calasAtd,
            icon: faCalendarCheck,
            link: '/presensi/calas',
            private: false
        },
        {
            name: language.absent,
            icon: faCalendarMinus,
            link: '/absent',
            private: false
        }
    ]

    const handleAvatarMenuOpen = (event) => {
        setAvataranchorEl(event.currentTarget)
    }

    const handleLogin = () => {
        
    }

    const handleLogout = () => {

    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button sx={{ color: 'white', display: 'block' }} onClick={() => toggleDrawer(true)}>
                        <FontAwesomeIcon size="2xl" icon={faBars} />
                    </Button>
                    <Typography variant="h5" sx={{ mx: 1, flexGrow: 1 }}>Logo</Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((item, index) => (
                            !item.private && (
                                <Button key={index} sx={{ color: 'white', }} href={item.link}>
                                    <FontAwesomeIcon size="2xl" icon={item.icon} />
                                    <Typography sx={{ mx: 1 }} variant="subtitle1">{item.name}</Typography>
                                </Button>
                            )
                        ))}
                    </Box>
                    <Box sx={{ mx: 1 }}>
                        {isAuthenticated ? (
                            <>
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
                            </>
                        ) : (
                            <Button onClick={() => setModalOpen(true)} sx={{ color: 'white', mx: 2 }}>Login</Button>
                        )}
                    </Box>

                </Toolbar>
            </AppBar>
            {!isAuthenticated && (
                <ModalMain
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    modalTitle='Login'
                >
                    <LoginRenderModal
                        language={language}
                        value={loginForm}
                        setInputValue={setLoginForm}
                        handleLogin={handleLogin}
                    />


                </ModalMain>
            )}

        </>
    )
};

export default Header;
