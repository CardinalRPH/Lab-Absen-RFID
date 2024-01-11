/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Typography } from "@mui/material"
import MobileDPicker from "../DateAndTime/MobileDPicker"

const AttendanceChangeDateCard = ({ currDate, handleChangeDate }) => {
    const { dateValue } = currDate
    return (
        <Card sx={{ my: 2 }}>
            <CardContent>
                <Typography>Ganti Tanggal Presensi</Typography>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                    <MobileDPicker
                        dateValue={dateValue}
                        handleChangeDate={handleChangeDate}
                        disableFuture={true}
                        label='Ganti Tanggal'
                    />
                </Box>

            </CardContent>
        </Card>
    )
}

export default AttendanceChangeDateCard