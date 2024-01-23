import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Card, CardContent, Container, Typography } from "@mui/material"
import MediumCard from "../components/Cards/MediumCard"
import ExportCard from "../components/Cards/ExportCard"
import { chartData, homedata } from "../data/dummyData"
import TabsChartComponent from "../components/TabsChartComponent"
import { useEffect, useState } from "react"
import ModalMain from "../components/Modals/ModalMain"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import ExportRenderModal from "../components/Modals/ExportRenderModal"
import { useSelector } from "react-redux"
import { enLang, idLang } from "../utilities/LanguageTextConfig"

const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const { isEnLang } = useSelector(state => state.languages)
    const language = isEnLang ? enLang : idLang
    const serverDate = Date.now()
    const navigate = useNavigate()
    const [dateRangeVal, setDateRangeVal] = useState({
        dateRange1: moment(serverDate),
        dateRange2: moment(serverDate)
    })
    const [radioReportVal, setRadioReportVal] = useState('')


    const handleExportPDF = () => {
        setModalTitle('PDF')
        setModalOpen(true)
    }

    const handleExportExcel = () => {
        setModalTitle('Excel')
        setModalOpen(true)
    }

    const handleDateRangeChange = (value, pickers) => {
        setDateRangeVal(prevState => ({
            ...prevState,
            [pickers]: value
        }))
    }

    const handleExportModalAcc = (e) => {
        e.preventDefault()
        setModalOpen(false)
        navigate('/export', {
            state: {
                type: modalTitle.toLowerCase(),
                dateRange: {
                    dateRange1: dateRangeVal.dateRange1.toISOString(),
                    dateRange2: dateRangeVal.dateRange2.toISOString()
                },
                radioReport: radioReportVal
            }
        })
    }

    useEffect(() => {
        document.title = `${language?.home} - Lab ICT Presensi`
    }, [language?.home])

    return (
        <>
            <Container sx={{ py: 5, minHeight: '91.5vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                    <MediumCard
                        purpose='single'
                        data={homedata.jumlah_asisten_aktif}
                        title={language?.totalActiveassistant}
                        sub1={language?.assistant}
                        loading={loading}
                    />
                    <MediumCard
                        purpose='single'
                        data={homedata.jumlah_calon_asisten_aktif}
                        title={language?.totalActiveCalas}
                        sub1={language?.calas_l}
                        loading={loading}
                    />
                    <MediumCard
                        purpose='double'
                        data={homedata.jumlah_presensi}
                        title={language?.totalAtdnow}
                        sub1={language?.assistant}
                        sub2={language?.calas_l}
                        path1={(data) => data.asisten}
                        path2={(data) => data.calon_asisten}
                        loading={loading}
                    />
                    <MediumCard
                        purpose='double'
                        data={homedata.jumlah_izin}
                        title={language?.totalAbsentNow}
                        sub1={language?.assistant}
                        sub2={language?.calas_l}
                        path1={(data) => data.asisten}
                        path2={(data) => data.calon_asisten}
                        loading={loading}
                    />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <ExportCard exportFunc={handleExportPDF}>
                            <FontAwesomeIcon color="#1976D2" size="5x" icon={faFilePdf} />
                            <Typography variant="h5" sx={{ mt: 2 }}>{language?.exportcard}</Typography>
                            <Typography variant="h5">PDF</Typography>
                        </ExportCard>
                        <ExportCard exportFunc={handleExportExcel}>
                            <FontAwesomeIcon color="#1976D2" size="5x" icon={faFileExcel} />
                            <Typography variant="h5" sx={{ mt: 2 }}>{language?.exportcard}</Typography>
                            <Typography variant="h5">Excel</Typography>
                        </ExportCard>
                    </Box>
                    <Card sx={{ width: '100%', margin: 2 }}>
                        <CardContent>
                            <TabsChartComponent language={language} loading={loading} data={chartData} />
                        </CardContent>
                    </Card>


                </Box>
            </Container>
            <ModalMain
                onClose={() => setModalOpen(false)}
                open={modalOpen}
                modalTitle={`Export ${modalTitle}`}
            >
                <Box sx={{ m: 2 }} component='form' onSubmit={(event) => handleExportModalAcc(event)}>
                    <ExportRenderModal
                        language={language}
                        modalSeter={setModalOpen}
                        handleDateRange={{ dateRangeVal, handleDateRangeChange }}
                        handleRadio={{ radioReportVal, setRadioReportVal }}
                    />
                </Box>

            </ModalMain>
        </>
    )
}

export default HomePage