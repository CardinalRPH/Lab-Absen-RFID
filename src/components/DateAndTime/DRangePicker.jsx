/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import DesktopDPicker from "./DesktopDPicker"

const defaultMidDivider = <Typography variant="h4" >-</Typography>

const DRangePicker = ({ label, disableFuture = false, handleDateChange, dateValue, midDivider = defaultMidDivider }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1 }}>
                    <DesktopDPicker
                        label={label && label[0]}
                        disableFuture={disableFuture}
                        dateValue={dateValue && dateValue[Object.keys(dateValue)[0]]}
                        handleChangeDate={value => dateValue && handleDateChange(value, Object.keys(dateValue)[0])}
                    />
                </Box>
                <Box sx={{ m: 1 }}>
                    {midDivider}
                </Box>
                <Box sx={{ m: 1 }}>
                    <DesktopDPicker
                        label={label && label[1]}
                        disableFuture={disableFuture}
                        dateValue={dateValue && dateValue[Object.keys(dateValue)[1]]}
                        handleChangeDate={value => dateValue && handleDateChange(value, Object.keys(dateValue)[1])}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    )
}
export default DRangePicker