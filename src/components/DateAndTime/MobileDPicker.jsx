import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"

// eslint-disable-next-line react/prop-types
const MobileDPicker = ({ handleChangeDate, dateValue, disableFuture = false, label }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
            <MobileDatePicker
                label={label}
                format="DD/MM/YYYY"
                disableFuture={disableFuture}
                onAccept={handleChangeDate}
                value={dateValue}
            />
        </LocalizationProvider>
    )
}

export default MobileDPicker