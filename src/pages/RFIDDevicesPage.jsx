import { Card, CardContent, Container, Typography } from "@mui/material"
import RFIDCard from "../components/Cards/RFIDCard"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { enLang, idLang } from "../utilities/LanguageTextConfig";

const RFIDDevicesPage = () => {
    const { isDarkMode } = useSelector(state => state.themes)
    const { isEnLang } = useSelector(state => state.languages)
    const language = isEnLang ? enLang : idLang

    const handleModeCHange = (mode, uid) => {
        console.log(mode);
        console.log(uid);
    }

    const handleDelete = (uid) => {
        console.log(uid);
    }

    useEffect(() => {
        document.title = 'RFID - Lab ICT Presensi'
    }, [])

    return (
        <Container sx={{ py: 5, minHeight:'91.5vh' }}>
            <Card sx={{ py: 2 }} >
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h4">{language?.rfid}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ my: 2, minHeight: 300 }}>
                <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <RFIDCard
                        uid="00122142"
                        dateRegis="01/02/1995"
                        deName="Device Name"
                        handleModeChange={handleModeCHange}
                        handleDelete={handleDelete}
                        isDark={isDarkMode}
                        language={language}
                    />
                    <RFIDCard
                        uid="00122142"
                        dateRegis="01/02/1995"
                        deName="Device Name"
                        handleModeChange={handleModeCHange}
                        handleDelete={handleDelete}
                        isDark={isDarkMode}
                        language={language}
                    />
                    <RFIDCard
                        uid="00122142"
                        dateRegis="01/02/1995"
                        deName="Device Name"
                        handleModeChange={handleModeCHange}
                        handleDelete={handleDelete}
                        isDark={isDarkMode}
                        language={language}
                    />
                </CardContent>
            </Card>

        </Container>
    )
}

export default RFIDDevicesPage