import { Box, Card, CardContent, Divider, Typography } from "@mui/material"

const AttendanceRecapCard = () => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography>Rekap Absen Harian</Typography>
                <Box sx={{ my: 2 }}>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>15 Asisten</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography >Hadir</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>15 Asisten</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography >Tidak Hadir</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ my: 2 }}>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>15 Asisten</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography >Tepat Waktu</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>15 Asisten</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography >Terlambat</Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AttendanceRecapCard