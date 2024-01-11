import { Box, Button, Card, CardContent, Container, Skeleton, Typography } from "@mui/material"
import TableAttendanceComponent from "../components/Tables/TableAttendanceComponent"
import AttendanceRecapCard from "../components/Cards/AttendanceRecapCard"
import AttendanceChangeDateCard from "../components/Cards/AttendanceChangeDateCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ModalMain from "../components/Modals/MdalMain"
import moment from "moment"
import AttendanceRenderModal from "../components/Modals/AttendanceRenderModal"
import AlertMain from "../components/AlertMain.jSX"
import RootLoading from "../components/RootLoading"

const AssistantAttendancePage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const serverDate = Date.now()
    const convertedServerDate = moment(serverDate)
    const [dateValue, setDateValue] = useState(moment(serverDate));
    const [homeward, setHomeward] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false)
    const [attendanceTime, setAttendanceTime] = useState(moment(serverDate))
    const [loading, setLoading] = useState(false)

    const handleAddAttendance = () => {
        setModalOpen(true)
        setHomeward(false)
        setAttendanceTime(moment(serverDate))
        setModalTitle('Tambah Presensi Datang')
    }

    const handleRowClick = (rowId) => {
        setModalOpen(true)
        setHomeward(true)
        setModalTitle('Presensi Pulang')
        console.log(rowId);
    }

    const handleHomewardData = (multiData) => {
        console.log(multiData);
    }

    const handleModalAcc = () => {
        if (homeward) {
            //add homeward function
        } else {
            setAlertOpen(true)
            //add comin function
        }
        setModalOpen(false)

    }

    const handleModalCancle = () => {
        if (homeward) {
            //add homeward function
        } else {
            //add comin function
        }
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
                                <Button variant="contained" onClick={()=> loading===false && handleAddAttendance()}>
                                    {loading ? (<Skeleton sx={{ minWidth: 170 }} />) : (
                                        <>
                                            <Box sx={{ mr: 1 }}>
                                                <FontAwesomeIcon size="lg" icon={faPlus} />
                                            </Box>
                                            Tambah Presensi
                                        </>
                                    )}
                                </Button>
                            </Box>
                            {loading ? (<RootLoading />) : (
                                <TableAttendanceComponent handleRowClick={handleRowClick} handleHomewardData={handleHomewardData} />
                            )}
                        </CardContent>
                    </Card>
                    <Box sx={{ m: 2, width: { xs: '100%', md: '30%' } }}>
                        <AttendanceRecapCard loading={loading} label='Asisten' />
                        <AttendanceChangeDateCard currDate={{ dateValue }} handleChangeDate={handleChangeDate} />
                    </Box>
                </Box>
            </Container>
            <AlertMain
                alertLabel='test'
                severity='success'
                open={alertOpen}
                onClose={() => setAlertOpen(false)}
                anchorPosition={{ vertical: 'bottom', horizontal: 'center' }}
            />
            <ModalMain
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                modalTitle={modalTitle}
            >
                <AttendanceRenderModal
                    onAccept={handleModalAcc}
                    onCancle={handleModalCancle}
                    onTimeChange={setAttendanceTime}
                    timeValue={attendanceTime}
                    homeward={homeward}
                />
            </ModalMain>

        </>
    )
}

export default AssistantAttendancePage