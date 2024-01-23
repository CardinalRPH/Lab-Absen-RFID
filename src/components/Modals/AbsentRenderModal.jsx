/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material"
import SelectCheckMarks from "../SelectCheckMarks"
import DRangePicker from "../DateAndTime/DRangePicker"

const AbsentRenderModal = ({handleModalAcc, handleModalCancel, language}) => {
    return (
        <Box sx={{ minWidth: { xs: 'auto', md: 800 }, m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', m: 1 }}>
                <SelectCheckMarks label={language?.chooseAssistant} sx={{ width: '100%' }} />
            </Box>
            <DRangePicker
                label={[language?.startTime, `${language?.endTime} (Optional)`]}
                required1={true}
            />
            <Box sx={{ m: 1, width: '100%' }}>
                <TextField
                    multiline
                    maxRows={3}
                    label={language?.info}
                    sx={{ width: '100%' }}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ m: 1 }} onClick={handleModalAcc} variant="contained">{language?.cancel}</Button>
                <Button sx={{ m: 1 }} onClick={handleModalCancel} variant="contained">Ok</Button>
            </Box>
        </Box>
    )
}

export default AbsentRenderModal