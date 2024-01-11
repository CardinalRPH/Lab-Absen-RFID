import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeState'

const store = configureStore({
    reducer: {
        themes: themeReducer
    }
})

export default store