import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Card, CardContent, Container, Typography } from "@mui/material"
import MediumCard from "../components/Cards/MediumCard"
import ExportCard from "../components/Cards/ExportCard"
import { chartData, homedata } from "../data/dummyData"
import TabsChartComponent from "../components/TabsChartComponent"
import { useState } from "react"
import ModalMain from "../components/Modals/MdalMain"
import DRangePicker from "../components/DateAndTime/DRangePicker"
import moment from "moment"

const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const serverDate = Date.now()
    const [dateRangeVal, setDateRangeVal] = useState({
        dateRange1: moment(serverDate),
        dateRange2: moment(serverDate)
    })

    const handleExportPDF = () => {
        setModalTitle('Export PDF')
        setModalOpen(true)
    }

    const handleExportExcel = () => {
        setModalTitle('Export Excel')
        setModalOpen(true)
    }

    const handleDateRangeChange = (value, pickers) => {
        setDateRangeVal(prevState => ({
            ...prevState,
            [pickers]: value
        }))
    }

    return (
        <>
            <Container sx={{ my: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                    <MediumCard
                        purpose='single'
                        data={homedata.jumlah_asisten_aktif}
                        title='Jumlah Asisten Aktif'
                        sub1='Asisten'
                        loading={loading}
                    />
                    <MediumCard
                        purpose='single'
                        data={homedata.jumlah_calon_asisten_aktif}
                        title='Jumlah Calon Asisten Aktif'
                        sub1='Calon Asisten'
                        loading={loading}
                    />
                    <MediumCard
                        purpose='double'
                        data={homedata.jumlah_presensi}
                        title='Jumlah Presensi Hari Ini'
                        sub1='Asisten'
                        sub2='Calon Asisten'
                        path1={(data) => data.asisten}
                        path2={(data) => data.calon_asisten}
                        loading={loading}
                    />
                    <MediumCard
                        purpose='double'
                        data={homedata.jumlah_izin}
                        title='Jumlah Izin Hari Ini'
                        sub1='Asisten'
                        sub2='Calon Asisten'
                        path1={(data) => data.asisten}
                        path2={(data) => data.calon_asisten}
                        loading={loading}
                    />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <ExportCard exportFunc={handleExportPDF}>
                            <FontAwesomeIcon color="#1976D2" size="5x" icon={faFilePdf} />
                            <Typography variant="h5" sx={{ mt: 2 }}>Export Presensi</Typography>
                            <Typography variant="h5">PDF</Typography>
                        </ExportCard>
                        <ExportCard exportFunc={handleExportExcel}>
                            <FontAwesomeIcon color="#1976D2" size="5x" icon={faFileExcel} />
                            <Typography variant="h5" sx={{ mt: 2 }}>Export Presensi</Typography>
                            <Typography variant="h5">Excel</Typography>
                        </ExportCard>
                    </Box>
                    <Card sx={{ width: '100%', margin: 2 }}>
                        <CardContent>
                            <TabsChartComponent loading={loading} data={chartData} />
                        </CardContent>
                    </Card>


                </Box>
            </Container>
            <ModalMain
                onClose={() => setModalOpen(false)}
                open={modalOpen}
                modalTitle={modalTitle}
            >
                <DRangePicker
                    label={['A', 'B']}
                    dateValue={dateRangeVal}
                    handleDateChange={handleDateRangeChange}
                    midDivider={<Typography>S/d</Typography>}
                />

            </ModalMain>
        </>
    )
}

export default HomePage