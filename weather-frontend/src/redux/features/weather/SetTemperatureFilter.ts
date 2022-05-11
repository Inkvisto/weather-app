import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { WeatherFilters } from '../../actionTypes'

export const  setTemperatureFilterSlice = createSlice({
    name:'setFilter',
    initialState:WeatherFilters.CELSIUM,
    reducers:{
        setTemperatureFilter:(state,action:PayloadAction<string>)=>(
            action.payload
            )
    }
})



export const {setTemperatureFilter} = setTemperatureFilterSlice.actions

export default setTemperatureFilterSlice.reducer