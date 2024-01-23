import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import dateFormater from "../utilities/dateFormater";
import daysCalculation from "../utilities/daysCalculation";
import TableExportPage from "../components/Tables/TableExportPage";
import pdfExporter from "../utilities/pdfExporter";
import excellExporter from "../utilities/excellExporter";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { enLang, idLang } from "../utilities/LanguageTextConfig";

const ExportPriviewPage = () => {
    const { state = {} } = useLocation()
    const { isEnLang } = useSelector(state => state.languages)
    const language = isEnLang ? enLang : idLang

    const renderView = () => {
        const { type, dateRange, radioReport } = state
        const { dateRange1, dateRange2 } = dateRange

        const handleButonCLick = () => {
            if (type === 'pdf') {
                pdfExporter()
            } else {
                excellExporter()
            }
        }
        return (
            <>
                <Card sx={{ py: 2 }} >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="h4">{language?.previewAtdRerport}</Typography>
                        <Typography variant="h5">{dateFormater(dateRange1, isEnLang ? 'en-EN' : 'id-ID')} {language?.to} {dateFormater(dateRange2, isEnLang ? 'en-EN' : 'id-ID')}</Typography>
                    </CardContent>
                </Card>
                <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={handleButonCLick} variant="contained">{language?.print} {type.toUpperCase()}</Button>
                </Box>
                <Card sx={{ py: 2 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', my: 1 }}>
                            <Box sx={{ width: '15%' }}>
                                <Typography>{language?.period}</Typography>
                            </Box>
                            <Box sx={{ width: '85%' }}>
                                <Typography>: {dateFormater(dateRange1, isEnLang ? 'en-EN' : 'id-ID')} {language?.to} {dateFormater(dateRange2, isEnLang ? 'en-EN' : 'id-ID')}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', my: 1 }}>
                            <Box sx={{ width: '15%' }}>
                                <Typography>{language?.totalDay}</Typography>
                            </Box>
                            <Box sx={{ width: '85%' }}>
                                <Typography>: {daysCalculation(dateRange1, dateRange2)}</Typography>
                            </Box>
                        </Box>
                        <TableExportPage />
                    </CardContent>
                </Card>
            </>
        )
    }

    useEffect(() => {
        document.title = `Export ${state ? state.type.toUpperCase() : ''} - Lab ICT Presensi`
    }, [state])

    const renderNull = () => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                <Typography color='text.primary' variant="h1">Tidak ada data</Typography>
            </Box>
        )
    }

    return (
        <Container sx={{ py: 5, minHeight: '91.5vh' }}>
            {state ? renderView() : renderNull()}
        </Container>
    )
}
export default ExportPriviewPage;