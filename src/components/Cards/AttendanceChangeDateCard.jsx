/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Typography } from "@mui/material"
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const AttendanceChangeDateCard = ({ currDate, handleChangeDate }) => {
    const { dateValue } = currDate
    return (
        <Card sx={{ my: 2 }}>
            <CardContent>
                <Typography>Ganti Tanggal Presensi</Typography>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
                        <MobileDatePicker
                            label='Ganti Tanggal'
                            format="DD/MM/YYYY"
                            disableFuture
                            onAccept={handleChangeDate}
                            value={dateValue}
                        />
                    </LocalizationProvider>
                </Box>

            </CardContent>
        </Card>
    )
}

export default AttendanceChangeDateCard