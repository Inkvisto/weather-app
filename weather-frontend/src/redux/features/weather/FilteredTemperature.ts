import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilteredTemperature } from '../../actionTypes/filteredTemperature.type'



const initialState = {
    
        dailyWeather:[],
        currentTemperature:[],
        currentNames:[],
        detailedCurrentTemperature:[],
        location:[]
    
} as FilteredTemperature

export const filteredTemperatureSlice = createSlice({
    name:'filterTemperature',
    initialState:initialState,
    reducers:{
        loadFilteredTemperature:(state,action)=>(
          
               action.payload
        
        )
    }
})




export const {loadFilteredTemperature} = filteredTemperatureSlice.actions

export default filteredTemperatureSlice.reducer