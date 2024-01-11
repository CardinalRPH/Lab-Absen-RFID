import { Box, Button } from "@mui/material"
import SelectCheckMarks from "../SelectCheckMarks"
import StaticTPicker from "../DateAndTime/StaticTPicker"
import BotLineTyphograph from "../BotLineTyphograph"

// eslint-disable-next-line react/prop-types
const AttendanceRenderModal = ({ onCancle, onAccept, onTimeChange, timeValue, homeward = false }) => {

    const renderHomeward = () => {
        return (
            <Box sx={{ width: 400 }}>
                <BotLineTyphograph label='NIM' text={'01234'} />
                <BotLineTyphograph label='Nama' text={'jarwo'} />
            </Box>
        )
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, justifyContent: 'center' }}>
            <Box sx={{ m: 2 }}>
                <StaticTPicker
                    onChange={onTimeChange}
                    value={timeValue}
                    readOnly={!homeward}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', m: 2 }}>
                {homeward ? renderHomeward() : (<SelectCheckMarks label='Pilih Asisten' sx={{ width: 400, m: 2 }} />)}
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                    <Button sx={{ mx: 2 }} onClick={onCancle} variant="contained">Batal</Button>
                    <Button sx={{ mx: 2 }} onClick={onAccept} variant="contained">OK</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AttendanceRenderModal