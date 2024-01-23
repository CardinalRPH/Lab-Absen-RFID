/* eslint-disable react/prop-types */
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import TextFieldPassword from "../TextFieldPassword"

// eslint-disable-next-line react/prop-types
const AsistenCalasRenderModal = ({ purposer, modalSeter, inputForm, setInputForm, handler, modalTitler, language }) => {
    const { handleDeleteData, handleDisableData, handleEditData, handleSaveData } = handler
    const { setModalTitle, modalTitle } = modalTitler
    const [readOnlyInput, setReadOnlyInput] = useState(false)
    const [emailValidator, setEmailValidator] = useState(false)
    const [purpose, setPurpose] = useState(purposer)

    const handleInputNumber = (event) => {
        const cleanedValue = event.target.value.replace(/\D/g, '');
        handleInputChange({ target: { name: event.target.name, value: cleanedValue } })
    }

    const handleInputEmail = (event) => {
        const inputValue = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputValue);
        setEmailValidator(!isValid)
        handleInputChange(event)
    }

    const handleInputChange = (event) => {
        setInputForm(prevState => ({
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
        const cutWord = language?.edit
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
        <Box component={purpose === 'view' ? undefined : 'form'} onSubmit={(event) => purpose === 'add' ? handleSaveData(event) : handleEditData(event, inputForm.nim)}>
            <Box sx={{ display: 'flex', minWidth: { xs: 'auto', md: 800 }, my: 1 }}>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', mr: 2 }}>
                    <TextField value={inputForm.nim} name="nim" sx={{ my: 1 }} onChange={handleInputNumber} id="standard-basic" label="NIM" variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                    <TextField value={inputForm.email} onChange={handleInputEmail} type='email' name="email" sx={{ my: 1 }} id="standard-basic" label={language?.email} variant="standard" required inputProps={{ readOnly: readOnlyInput }} error={emailValidator} />
                    <TextField value={inputForm.phone} name="phone" sx={{ my: 1 }} onChange={handleInputNumber} id="standard-basic" label={language?.phoneNumber} variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                </Box>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <TextField name="name" onChange={handleInputChange} value={inputForm.name} sx={{ my: 1 }} id="standard-basic" label={language?.fullName} variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                    <FormControl sx={{ my: 1 }}>
                        <FormLabel id='radio-buttons-group-label'>{language?.gender}</FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            aria-labelledby="radio-buttons-group-label"
                            value={inputForm.gender}
                            onChange={handleInputChange}
                            defaultValue='laki-laki'>
                            <FormControlLabel value="laki-laki" control={<Radio />} label={language?.male} componentsProps={{ typography: { color: 'text.secondary' } }} disabled={readOnlyInput} required />
                            <FormControlLabel value="perempuan" control={<Radio />} label={language?.female} componentsProps={{ typography: { color: 'text.secondary' } }} disabled={readOnlyInput} required />
                        </RadioGroup>
                    </FormControl>
                    {inputForm.position !== 'calonAsisten' && (
                        <TextField name="cardId" onChange={handleInputChange} value={inputForm.cardId} sx={{ my: 1 }} id="standard-basic" label={language?.cardSerialNumber} variant="standard" required inputProps={{ readOnly: readOnlyInput }} />
                    )}
                </Box>
            </Box>
            <FormControl fullWidth sx={{ my: 1 }} required>
                <InputLabel id="demo-simple-select-label">{language?.position}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputForm.position}
                    label="Jabatan"
                    name="position"
                    onChange={handleInputChange}
                    inputProps={{ readOnly: readOnlyInput }}
                >
                    <MenuItem value='calonAsisten'>{language?.calas_l}</MenuItem>
                    <MenuItem value='asisten'>{language?.assistant}</MenuItem>
                    <MenuItem value='spv'>SPV</MenuItem>
                </Select>
            </FormControl>
            {inputForm.position === 'spv' && (
                <TextFieldPassword name='password' variant="standard" label={language?.password} onChange={handleInputChange} value={inputForm.password} readOnly={readOnlyInput} />

            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>

                {purpose === 'view' && (
                    <>

                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => modalSeter(false)} >{language?.cancel}</Button>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleDeleteData()}>{language?.delete}</Button>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleDisableData()}>{language?.disableIt}</Button>
                        <Button variant="contained" onClick={() => setPurpose('edit')} sx={{ mx: 1 }}>{language?.edit}</Button>
                    </>
                )}
                {purpose === 'edit' && (
                    <>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => setPurpose('view')} >{language?.cancel}</Button>
                        <Button variant="contained" sx={{ mx: 1 }} type="submit" >{language?.saveChange}</Button>

                    </>
                )}
                {purpose === 'add' && (
                    <>
                        <Button variant="contained" sx={{ mx: 1 }} onClick={() => modalSeter(false)} >{language?.cancel}</Button>
                        <Button variant="contained" type="submit" sx={{ mx: 1 }}>{language?.save}</Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AsistenCalasRenderModal