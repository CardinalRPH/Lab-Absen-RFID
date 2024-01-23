import { Box, Button, Card, CardContent, Container, Skeleton, Typography, } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ModalMain from "../components/Modals/ModalMain";
import AsistenCalasRenderModal from "../components/Modals/AsistenCalasRenderModal";
import TableMainComponent from "../components/Tables/TableMainComponent";
import DialogAlertMain from "../components/DialogAlertMain";
import RootLoading from "../components/RootLoading";
import { useSelector } from "react-redux";
import { enLang, idLang } from "../utilities/LanguageTextConfig";

//todo
//add Loading
//add fetch url ws
// add alert fail or success

const AssistantPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [renderModalPurpose, setRenderModalPurpose] = useState('view')
    const [modalTitle, setModalTitle] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogTitle, setDialogTitle] = useState('')
    const { isEnLang } = useSelector(state => state.languages)
    const language = isEnLang ? enLang : idLang
    const [loading, setLoading] = useState(false)
    const [inputForm, setInputForm] = useState({
        nim: '',
        email: '',
        phone: '',
        name: '',
        gender: '',
        position: '',
        cardId: '',
        password: ''
    })

    const handleRowClick = (rowId) => {
        setModalTitle(language?.dataAsistant)
        setRenderModalPurpose('view')
        setModalOpen(true)
        console.log(rowId);
    }

    const handleAddModalOpen = () => {
        setModalTitle(language?.addMoreAssistant)
        setRenderModalPurpose('add')
        setModalOpen(true)
    }

    const handleSaveData = (event) => {
        event.preventDefault()
        console.log(inputForm);
    }

    const handleEditData = (event, id) => {
        event.preventDefault()
        console.log(id);
    }

    const handleEditOpenModal = (id) => {
        setModalTitle(language?.changeAssistantData)
        setRenderModalPurpose('edit')
        setModalOpen(true)
        console.log(id);

    }

    const handleDisableData = (multiData, singleData) => {
        setDialogOpen(true)
        setDialogTitle(language?.disableIt)
        if (multiData) {
            console.log(multiData);
            //handle multiple data
        } else {
            console.log(singleData);
            //handle singgle data
        }

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
        document.title = `${language?.assistant} - Lab ICT Presensi`
    }, [language?.assistant])

    return (
        <>
            <Container sx={{ py: 5, minHeight: '91.5vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                    <Button sx={{ mx: 1, }} variant="contained" onClick={() => loading == false && handleAddModalOpen()}>
                        {loading ? (<Skeleton sx={{ minWidth: 200 }} />) : (
                            <>
                                <FontAwesomeIcon size="lg" icon={faPlus} />
                                <Typography sx={{ mx: 1 }}>{language?.addMoreAssistant}</Typography>
                            </>
                        )}
                    </Button>
                </Box>
                <Card>
                    <CardContent>
                        {loading ? (<RootLoading />) : (
                            <TableMainComponent language={language} handler={{ handleRowClick, handleDeleteData, handleDisableData, handleEditOpenModal, handleSaveData }} />
                        )}
                    </CardContent>
                </Card>
            </Container>
            <ModalMain
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                modalTitle={modalTitle}
            >
                <AsistenCalasRenderModal
                    language={language}
                    purposer={renderModalPurpose}
                    modalSeter={setModalOpen}
                    inputForm={inputForm}
                    modalTitler={{ setModalTitle, modalTitle }}
                    setInputForm={setInputForm}
                    handler={{ handleDeleteData, handleDisableData, handleEditData, handleSaveData }}
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

export default AssistantPage