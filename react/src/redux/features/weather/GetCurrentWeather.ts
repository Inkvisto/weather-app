import { createSlice } from '@reduxjs/toolkit'
import { Weather } from '../../actionTypes/weatherData.type'


export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: {} as Partial<Weather>,
  reducers: {
    getCurrentWeather: (state, action) => (action.payload)
  }
})


export const { getCurrentWeather } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer