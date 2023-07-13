import { configureStore } from '@reduxjs/toolkit'

import LoginLogoutSlice from '../features/LoginLogout/LoginLogout';


export const store = configureStore({
    reducer: {
        LoginLogoutSlice: LoginLogoutSlice
    }
})
