import { createSlice } from '@reduxjs/toolkit'
import { DailyWeather } from '../../actionTypes/dailyWeather'




const initialState = {
    dailyTemperature:[],
    dailyIcons:[],
    dailyDescription:[],
    dailyDataTime:[]

} as DailyWeather





export const dailyWeatherSlice = createSlice({
    name:'dailyWeather',
    initialState:initialState,
    reducers:{
        loadDailyWeather:(state,action)=>(
            
            action.payload
        )
    }
})




export const {loadDailyWeather} = dailyWeatherSlice.actions

export default dailyWeatherSlice.reducer