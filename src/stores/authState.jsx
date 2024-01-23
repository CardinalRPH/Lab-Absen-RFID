import { createSlice } from "@reduxjs/toolkit"

const initialState = { isAuthenticated: true }

const authSlicer = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            console.log(action.payload);
        },
        logout(state) {
            state.isAuthenticated = false

        }
    }
})

export const authAction = authSlicer.actions
export default authSlicer.reducer