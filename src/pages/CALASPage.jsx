import { Box, Button, Container, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import TableMainComponent from "../components/Tables/TableMainComponent"

const CALASPage = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ mx: 1, }} variant="contained">
                    <FontAwesomeIcon size="lg" icon={faPlus} />
                    <Typography sx={{ mx: 1 }}>Tambah Calon Asisten Baru</Typography>
                </Button>
            </Box>
            <TableMainComponent/>
        </Container>
    )
}

export default CALASPage