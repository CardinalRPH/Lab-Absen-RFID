import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Button, Card, CardContent, Container, Skeleton, Typography } from "@mui/material"
import moment from "moment"
import { useEffect, useState } from "react"
import RootLoading from "../components/RootLoading"
import TableAttendanceComponent from "../components/Tables/TableAttendanceComponent"
import AttendanceRecapCard from "../components/Cards/AttendanceRecapCard"
import AttendanceChangeDateCard from "../components/Cards/AttendanceChangeDateCard"
import AlertMain from "../components/AlertMain"
import ModalMain from "../components/Modals/ModalMain"
import AttendanceRenderModal from "../components/Modals/AttendanceRenderModal"
import { useSelector } from "react-redux"
import DialogAlertMain from "../components/DialogAlertMain"
import CurrentDateCard from "../components/Cards/CurrentDateCard"
import { enLang, idLang } from "../utilities/LanguageTextConfig"

const CALASAttendancePage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

    const currentTimestamp = Date.now()
    const currentDate = new Date(currentTimestamp);
    const serverDate = new Date(currentDate.getTime() + 60 * 60 * 1000)
    const convertedServerDate = moment(serverDate)

    const [dateValue, setDateValue] = useState(moment(serverDate));
    const [homeward, setHomeward] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false)
    const [currentTime, setCurrentTime] = useState(convertedServerDate)
    const [attendanceTime, setAttendanceTime] = useState(currentTime)
    const { isAuthenticated } = useSelector(state => state.auths)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogTitle, setDialogTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const { isEnLang } = useSelector(state => state.languages)
    const language = isEnLang ? enLang : idLang

    const handleAddAttendance = () => {
        setModalOpen(true)
        setHomeward(false)
        setAttendanceTime(currentTime)
        setModalTitle(language?.comeAtd)
    }

    const handleRowClick = (rowId) => {
        if (dateValue.isSame(currentTime, 'day')) {
            setAttendanceTime(currentTime)
            setModalOpen(true)
            setHomeward(true)
            setModalTitle(language?.homewardAtd)
            console.log(rowId);
        }
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

    const handleModalCancel = () => {
        if (homeward) {
            //add homeward function
        } else {
            //add comin function
        }
    }

    const handleChangeDate = (value) => {
        setDateValue(value)
    }

    const handleDeleteData = (multiData, singleData) => {
        setDialogOpen(true)
        setDialogTitle(language?.delete)
        if (multiData) {
            console.log(multiData);
            //handle multiple data
        } else {
            console.log(singleData);
            //handle singgle data
        }
    }


    const handleDialonAcc = () => {

    }

    const handleDialogCancle = () => {

    }

    useEffect(() => {
        document.title = `${language?.calasAtd} - Lab ICT Presensi`
    }, [language?.calasAtd])

    return (
        <>
            <Container sx={{ py: 5, minHeight: '91.5vh' }}>
                <Card >
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                        <Typography variant="h4">{language?.calasAtd_l}</Typography>
                    </CardContent>
                </Card>
                <Box sx={{ display: 'flex', my: 2, flexWrap: { xs: 'wrap', md: 'nowrap' }, justifyContent: 'space-between' }}>
                    <Card sx={{ mr: { xs: 'auto', md: 2 }, width: { xs: '100%', md: '70%' } }}>
                        <CardContent>
                            <Box sx={{ justifyContent: 'center', display: dateValue.isSame(currentTime, 'day') ? 'flex' : 'none', my: 1, }}>
                                <Button variant="contained" onClick={() => loading === false && handleAddAttendance()}>
                                    {loading ? (<Skeleton sx={{ minWidth: 170 }} />) : (
                                        <>
                                            <Box sx={{ mr: 1 }}>
                                                <FontAwesomeIcon size="lg" icon={faPlus} />
                                            </Box>
                                            {language?.addAtd}
                                        </>
                                    )}
                                </Button>
                            </Box>
                            {loading ? (<RootLoading />) : (
                                <TableAttendanceComponent
                                    isDateSame={dateValue.isSame(convertedServerDate, 'day')}
                                    language={language}
                                    handleRowClick={handleRowClick}
                                    handleHomewardData={handleHomewardData}
                                    handleDeleteData={handleDeleteData}
                                />
                            )}
                        </CardContent>
                    </Card>
                    <Box sx={{ ml: { xs: 'auto', md: 2 }, my: { xs: 2, md: 0 }, width: { xs: '100%', md: '30%' } }}>
                        <AttendanceRecapCard language={language} loading={loading} label={language?.calas_s} />
                        <CurrentDateCard language={language} setCurrTime={setCurrentTime} serverDate={serverDate} />
                        <AttendanceChangeDateCard title={language?.changeDateAtd} language={language} readOnly={!isAuthenticated} currDate={{ dateValue }} handleChangeDate={handleChangeDate} />
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
                    language={language}
                    onAccept={handleModalAcc}
                    onCancle={handleModalCancel}
                    onTimeChange={setAttendanceTime}
                    timeValue={attendanceTime}
                    homeward={homeward}
                />
            </ModalMain>
            <DialogAlertMain
                dialogLabel={dialogTitle}
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                handleAccept={handleDialonAcc}
                handleCancle={handleDialogCancle}

            >
                lalalala

            </DialogAlertMain>

        </>
    )
}

export default CALASAttendancePage