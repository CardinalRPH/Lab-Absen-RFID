import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeState'
import authReducer from './authState'
import langReducer from './langState'

const store = configureStore({
    reducer: {
        themes: themeReducer,
        auths: authReducer,
        languages: langReducer
    }
})

export default store