import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material"
import TableAttendanceComponent from "../components/Tables/TableAttendanceComponent"
import AttendanceRecapCard from "../components/Cards/AttendanceRecapCard"
import AttendanceChangeDateCard from "../components/Cards/AttendanceChangeDateCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ModalMain from "../components/Modals/MdalMain"
import { LocalizationProvider, StaticTimePicker } from "@mui/x-date-pickers"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from "moment"
import SelectCheckMarks from "../components/SelectCheckMarks"

const AssistantAttendancePage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const serverDate = Date.now()
    const convertedServerDate = moment(serverDate)
    const [dateValue, setDateValue] = useState(moment(serverDate));

    const handleAddAttendance = () => {
        setModalOpen(true)
        setModalTitle('Tambah Presensi Datang')
    }

    const handleChangeDate = (value) => {
        setDateValue(value)
    }

    return (
        <>
            <Container sx={{ my: 5 }}>
                <Box sx={{ py: 2 }}>
                    <Card >
                        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h4">Presensi Asisten</Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, justifyContent: 'space-between' }}>
                    <Card sx={{ m: 2, width: { xs: '100%', md: '70%' } }}>
                        <CardContent>
                            <Box sx={{ justifyContent: 'center', display: dateValue.isSame(convertedServerDate, 'day') ? 'flex' : 'none', my: 1, }}>
                                <Button variant="contained" onClick={handleAddAttendance}>
                                    <Box sx={{ mr: 1 }}>
                                        <FontAwesomeIcon size="lg" icon={faPlus} />
                                    </Box>
                                    Tambah Presensi
                                </Button>
                            </Box>
                            <TableAttendanceComponent />
                        </CardContent>
                    </Card>
                    <Box sx={{ m: 2, width: { xs: '100%', md: '30%' } }}>
                        <AttendanceRecapCard />
                        <AttendanceChangeDateCard currDate={{ dateValue }} handleChangeDate={handleChangeDate} />
                    </Box>
                </Box>
            </Container>
            <ModalMain
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                modalTitle={modalTitle}
            >
                <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, justifyContent: 'center' }}>
                    <Box sx={{ m: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
                            <StaticTimePicker
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                localeText={{ timePickerToolbarTitle: "" }}
                                slotProps={{
                                    actionBar: { actions: null },
                                    previousIconButton: {
                                        sx: { display: 'none' }
                                    },
                                    nextIconButton: {
                                        sx: { display: 'none' }
                                    }
                                }}
                                ampm={false}
                                defaultValue={moment('2022-04-17T15:30')}
                                readOnly
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', m: 2 }}>
                        <SelectCheckMarks label='Pilih Asisten' sx={{ width: 400, m: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                            <Button sx={{ mx: 2 }} variant="contained">Batal</Button>
                            <Button sx={{ mx: 2 }} variant="contained">OK</Button>
                        </Box>
                    </Box>
                </Box>

            </ModalMain>
        </>
    )
}

export default AssistantAttendancePage