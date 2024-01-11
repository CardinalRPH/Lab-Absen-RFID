import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"

// eslint-disable-next-line react/prop-types
const DesktopDPicker = ({ label, disableFuture = false, handleChangeDate, dateValue }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                label={label}
                format="DD/MM/YYYY"
                disableFuture={disableFuture}
                onChange={handleChangeDate}
                value={dateValue}
            />
        </LocalizationProvider>
    )
}
export default DesktopDPicker