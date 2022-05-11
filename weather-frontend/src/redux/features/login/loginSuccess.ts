import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const loginSuccessSlice = createSlice({
    name:'currentTemperature',
    initialState: false,
    reducers:{
        loadloginSuccess:(state,action)=>(
                action.payload
              
            )
        }
})  




export const {loadloginSuccess} = loginSuccessSlice.actions

export default loginSuccessSlice.reducer