import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../../api/types'


export const loginSuccessSlice = createSlice({
    name: 'login',
    initialState: {} as User,
    reducers: {
        loadloginSuccess: (state, action) => (action.payload)
    }
})


export const { loadloginSuccess } = loginSuccessSlice.actions

export default loginSuccessSlice.reducer