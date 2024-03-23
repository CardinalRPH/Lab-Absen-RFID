import { createSlice } from "@reduxjs/toolkit"

const getTimeSessionStorage = () => {
    const getLocalStorage = sessionStorage.getItem('cTimeStamp')
    return getLocalStorage === null ? { timeStamp: null } : JSON.parse(getLocalStorage)
}

const saveTimeSessionStorage = (value) => {
    const cTimeStamp = { timeStamp: value }
    sessionStorage.setItem('cTimeStamp', JSON.stringify(cTimeStamp))
}

const initialState = getTimeSessionStorage()

const timeSlice = createSlice({
    name: 'timeState',
    initialState: initialState,
    reducers: {
        setTimeStamp(state, action) {
            state.timeStamp = action.payload
            saveTimeSessionStorage(action.payload)
        },
    }
})

export const timeAction = timeSlice.actions
export default timeSlice.reducer
