import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Data } from '../../actionTypes/data.type'

const initialState = {

  base:undefined,
  clouds:{},
  cod:404,
  coord:{},
  dt: 0,
  id: undefined,
  main:{},
  name:undefined,
  sys:{},
  timezone: undefined,
  visibility: undefined,
  weather: [{}],
  wind:{},
  message:undefined

} as Partial<Data> 




export const currentWeatherSlice = createSlice({
    name:'currentWeather',
    initialState:initialState,
    reducers:{
        getCurrentWeather:(state,action)=>(
          action.payload
        )
    }
})




export const {getCurrentWeather} = currentWeatherSlice.actions

export default currentWeatherSlice.reducer