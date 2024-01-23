/* eslint-disable react/prop-types */
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Card, CardContent, IconButton, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import BotLineTyphograph from "../BotLineTyphograph"
import { useState } from "react"

const RFIDCard = ({ uid = '', dateRegis = '', deName = '', handleDelete, modeVal = 'ernroll', handleModeChange, isDark, language }) => {
    const [mode, setMode] = useState(modeVal)

    const handleModeValChange = (event, value) => {
        handleModeChange(value, uid)
        setMode(value)
    }

    const darkmodeSet = isDark && {
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid'
    }
    return (
        <Card sx={{ m: 2, minWidth: 300, ...darkmodeSet }}>
            <CardContent sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                    <IconButton onClick={() => handleDelete(uid)}>
                        <FontAwesomeIcon size="xs" icon={faTrash} color="red" />
                    </IconButton>
                </Box>
                <Typography>{deName}</Typography>
                <Box>
                    <BotLineTyphograph
                        label='UID'
                        text={uid}
                        variant="subtitle1"
                    />
                    <BotLineTyphograph
                        label={language?.regisDate}
                        text={dateRegis}
                        variant="subtitle1"
                    />
                    <ToggleButtonGroup sx={{ display: 'flex', justifyContent: 'center' }}
                        value={mode}
                        onChange={handleModeValChange}
                        exclusive
                    >
                        <ToggleButton value='ernroll'>
                            <Typography>
                                Enroll
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value='attend'>
                            <Typography>
                                Attend
                            </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </CardContent>
        </Card>
    )
}

export default RFIDCard