import { Box, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
const BotLineTyphograph = ({ label, text }) => {
    return (
        <Box sx={{ borderBottom: 'solid', borderBottomWidth: 'thin', my: 2, mx: 1 }}>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography variant="h6" sx={{ px: 1 }}>{text}</Typography>
        </Box>
    )
}

export default BotLineTyphograph