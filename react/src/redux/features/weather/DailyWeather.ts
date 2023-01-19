import { createSlice } from '@reduxjs/toolkit'
import { Daily } from '../../actionTypes/dailyWeather.type'


export const dailyWeatherSlice = createSlice({
    name: 'dailyWeather',
    initialState: {} as Daily,
    reducers: {
        loadDailyWeather: (state, action) => (action.payload)
    }
})


export const { loadDailyWeather } = dailyWeatherSlice.actions

export default dailyWeatherSlice.reducer