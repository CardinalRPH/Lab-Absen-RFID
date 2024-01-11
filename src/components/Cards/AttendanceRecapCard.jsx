import { Box, Card, CardContent, Divider, Skeleton, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
const AttendanceRecapCard = ({ loading = false, label }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography>Rekap Absen Harian</Typography>
                <Box sx={{ my: 2 }}>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : `15 ${label}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography >{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : 'Hadir'}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : `15 ${label}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography >{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : 'Tidak Hadir'}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ my: 2 }}>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : `15 ${label}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : 'Tepat Waktu'}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', bgcolor: 'grey', my: 1, py: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : `15 ${label}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                            <Typography>{loading ? (<Skeleton sx={{ minWidth: 100 }} />) : 'Terlambat'}</Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AttendanceRecapCard