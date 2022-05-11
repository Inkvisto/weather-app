import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const currentTemperatureSlice = createSlice({
    name:'currentTemperature',
    initialState: [],
    reducers:{
        loadCurrentTemperature:(state,action)=>(
            
                action.payload
              
            )
        }
})  




export const {loadCurrentTemperature} = currentTemperatureSlice.actions

export default currentTemperatureSlice.reducer