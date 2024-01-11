import { Box, Button, Card, CardContent, Container, Skeleton, Typography, } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ModalMain from "../components/Modals/MdalMain";
import AsistenCalasRenderModal from "../components/Modals/AsistenCalasRenderModal";
import TableMainComponent from "../components/Tables/TableMainComponent";
import DialogAlertMain from "../components/DialogAlertMain";
import AlertMain from "../components/AlertMain.jSX";
import RootLoading from "../components/RootLoading";

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
        setModalTitle('Data Asisten')
        setRenderModalPurpose('view')
        setModalOpen(true)
        console.log(rowId);
    }

    const handleAddModalOpen = () => {
        setModalTitle('Tambah Asisten Baru')
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
        setModalTitle('Ubah Asisten Data')
        setRenderModalPurpose('edit')
        setModalOpen(true)
        console.log(id);

    }

    const handleDisableData = (multiData, singleData) => {
        setDialogOpen(true)
        setDialogTitle('Nonaktifkan')
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
        setDialogTitle('Hapus')
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
        document.title = 'Boo'
    }, [])

    return (
        <>
            <Container sx={{ my: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                    <Button sx={{ mx: 1, }} variant="contained" onClick={() => loading == false && handleAddModalOpen()}>
                        {loading ? (<Skeleton sx={{ minWidth: 200 }} />) : (
                            <>
                                <FontAwesomeIcon size="lg" icon={faPlus} />
                                <Typography sx={{ mx: 1 }}>Tambah Asisten Baru</Typography>
                            </>
                        )}
                    </Button>
                </Box>
                <Card>
                    <CardContent>
                        {loading ? (<RootLoading />) : (
                            <TableMainComponent handler={{ handleRowClick, handleDeleteData, handleDisableData, handleEditOpenModal, handleSaveData }} />
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
            <AlertMain
            />
        </>
    )
}

export default AssistantPage