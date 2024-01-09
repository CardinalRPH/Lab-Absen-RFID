/* eslint-disable react/prop-types */
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const AsistenCalasRenderModal = ({ purposer, modalSeter, inputForm, setInputForm, handler, modalTitler }) => {
    const { handleDeleteData, handleDisableData, handleEditData, handleSaveData } = handler
    const { setModalTitle, modalTitle } = modalTitler
    const [readOnlyInput, setReadOnlyInput] = useState(false)
    const [emailValidator, setEmailValidator] = useState(false)
    const [purpose, setPurpose] = useState(purposer)
    const [viewPassword, setViewPassowrd] = useState(false)

    const handleInputNumber = (event) => {
        const cleanedValue = event.target.value.replace(/\D/g, '');
        cleanedValue !== '' && handleInputChange({ target: { name: event.target.name, value: cleanedValue } })
    }

    const handleInputEmail = (event) => {
        const inputValue = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputValue);
        setEmailValidator(!isValid)
        handleInputChange(event)
    }

    const handleInputChange = (event) => {
        setInputForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const clearInput = () => {
        setInputForm({
            nim: '',
            email: '',
            phone: '',
            name: '',
            gender: '',
            position: '',
            cardId: '',
            password: ''
        })
    }

    useEffect(() => {
        const cutWord = 'Ubah'
        switch (purpose) {
            case 'edit':
                setReadOnlyInput(false)
                setModalTitle(`${cutWord} ${modalTitle}`)
                break
            case 'view':
                setReadOnlyInput(true)
                setModalTitle(modalTitle.startsWith(cutWord) ? modalTitle.slice(cutWord.length).trim() : modalTitle)
                break
            case 'add':
                setReadOnlyInput(false)
                clearInput()
                // empty field
                break
            default:
                setReadOnlyInput(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [purpose])
    return (
        <Box component={purpose === 'view' ? undefined : 'form'}>
            <Box sx={{ display: 'flex', minWidth: { xs: 'auto', md: 800 }, my: 1 }}>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', mr: 2 }}>
                    <TextField value={inputForm.nim} name="nim" sx={{ my: 1 }} onChange={handleInputNumber} id="standard-basic" label="NIM" variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                    <TextField value={inputForm.email} onChange={handleInputEmail} type='email' name="email" sx={{ my: 1 }} id="standard-basic" label="Email" variant="standard" required inputProps={{ readOnly: readOnlyInput }} error={emailValidator} />
                    <TextField value={inputForm.phone} name="phone" sx={{ my: 1 }} onChange={handleInputNumber} id="standard-basic" label="Nomor Handphone" variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                </Box>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <TextField name="name" onChange={handleInputChange} value={inputForm.name} sx={{ my: 1 }} id="standard-basic" label="Nama Lengkap" variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                    <FormControl sx={{ my: 1 }} required>
                        <FormLabel id='radio-buttons-group-label'>Jenis Kelamin</FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            aria-labelledby="radio-buttons-group-label"
                            value={inputForm.gender}
                            onChange={handleInputChange}
                            defaultValue='laki-laki'>
                            <FormControlLabel value="laki-laki" control={<Radio />} label="Laki-laki" disabled={readOnlyInput} />
                            <FormControlLabel value="perempuan" control={<Radio />} label="Perempuan" disabled={readOnlyInput} />
                        </RadioGroup>
                    </FormControl>
                    {inputForm.position !== 'calonAsisten' && (
                        <TextField name="cardId" onChange={handleInputChange} value={inputForm.cardId} sx={{ my: 1 }} id="standard-basic" label="Nomor Serial Kartu" variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                    )}
                </Box>
            </Box>
            <FormControl fullWidth sx={{ my: 1 }} required>
                <InputLabel id="demo-simple-select-label">Jabatan</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputForm.position}
                    label="Jabatan"
                    name="position"
                    onChange={handleInputChange}
                    inputProps={{ readOnly: readOnlyInput }}
                >
                    <MenuItem value='calonAsisten'>Calon Asisten</MenuItem>
                    <MenuItem value='asisten'>Asisten</MenuItem>
                    <MenuItem value='spv'>SPV</MenuItem>
                </Select>
            </FormControl>
            {inputForm.position === 'spv' && (
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <TextField name="password" onChange={handleInputChange} value={inputForm.password} sx={{ my: 1 }} id="standard-basic" label="Kata Sandi" variant="standard" required type={viewPassword ? 'text' : 'password'} inputProps={{ readOnly: readOnlyInput }} />
                    </Box>
                    <IconButton onClick={() => setViewPassowrd(!viewPassword)}>
                        {viewPassword ? (<FontAwesomeIcon icon={faEyeSlash} />) : (<FontAwesomeIcon icon={faEye} />)}
                    </IconButton>
                </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>

                {purpose === 'view' && (
                    <>

                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => modalSeter(false)} >Batal</Button>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleDeleteData()}>Hapus</Button>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleDisableData()}>Nonaktifkan</Button>
                        <Button variant="contained" onClick={() => setPurpose('edit')} sx={{ mx: 1 }}>Ubah</Button>
                    </>
                )}
                {purpose === 'edit' && (
                    <>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => setPurpose('view')} >Batal</Button>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleEditData(inputForm.nim)}>Simpan Ubah</Button>

                    </>
                )}
                {purpose === 'add' && (
                    <>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => modalSeter(false)} >Batal</Button>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={handleSaveData}>Simpan</Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AsistenCalasRenderModal