import { Box, Button, Container, Typography, } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModalMain from "../components/Modals/MdalMain";
import AsistenCalasRenderModal from "../components/Modals/AsistenCalasRenderModal";
import TableMainComponent from "../components/Tables/TableMainComponent";

//todo
//add Loading
//add fetch url ws
// add alert fail or success

const AssistantPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [renderModalPurpose, setRenderModalPurpose] = useState('view')
    const [modalTitle, setModalTitle] = useState('')
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

    const handleSaveData = () => {

    }

    const handleEditData = (id) => {
        console.log(id);
    }

    const handleEditOpenModal = (id) => {
        setModalTitle('Ubah Asisten Data')
        setRenderModalPurpose('edit')
        setModalOpen(true)
        console.log(id);

    }

    const handleDisableData = (multiData, singleData) => {
        if (multiData) {
            console.log(multiData);
            //handle multiple data
        } else {
            console.log(singleData);
            //handle singgle data
        }

    }

    const handleDeleteData = (multiData, singleData) => {
        if (multiData) {
            console.log(multiData);
            //handle multiple data
        } else {
            console.log(singleData);
            //handle singgle data
        }
    }

    return (
        <>
            <Container sx={{ my: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                    <Button sx={{ mx: 1, }} variant="contained" onClick={handleAddModalOpen}>
                        <FontAwesomeIcon size="lg" icon={faPlus} />
                        <Typography sx={{ mx: 1 }}>Tambah Asisten Baru</Typography>
                    </Button>
                </Box>
                <TableMainComponent handler={{ handleRowClick, handleDeleteData, handleDisableData, handleEditOpenModal, handleSaveData }}/>
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
        </>
    )
}

export default AssistantPage