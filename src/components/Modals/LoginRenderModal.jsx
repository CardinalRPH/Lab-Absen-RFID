/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material"
import TextFieldPassword from "../TextFieldPassword"

const LoginRenderModal = ({ value, setInputValue, handleLogin, language }) => {
    const handleInputChange = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleInputNumber = (event) => {
        const cleanedValue = event.target.value.replace(/[^0-9.]/, '');
        handleInputChange({ target: { name: event.target.name, value: cleanedValue } })
    }
    return (
        <Box sx={{ minWidth: 400, display: 'flex', flexDirection: 'column', my: 2 }}>
            <TextField
                sx={{ m: 1 }}
                label='NIM'
                name="nim"
                value={value.nim}
                onChange={handleInputNumber}
            />
            <TextFieldPassword
                label={language?.password}
                name='password'
                containerSx={{ m: 1 }}
                value={value.password}
                onChange={handleInputChange}

            />
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
                <Button onClick={handleLogin} variant="contained">Login</Button>
            </Box>
        </Box>
    )
}

export default LoginRenderModal