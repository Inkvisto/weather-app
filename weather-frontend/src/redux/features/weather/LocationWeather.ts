import { createSlice } from '@reduxjs/toolkit'
import { state } from '../../../components/DragAndDrop/DragAction'

interface LocationWeather {

  icon:string,
  place:string,
  temperature:number | null

}


const initialState:any = {
  location:[]
}
export const LocationWeatherSlice = createSlice({
  name: 'locationWeather',
  initialState:initialState,
  reducers: {
    loadLocationWeather:(state,action)=>{
  
   if(Array.isArray(action.payload) === true){
    return {
      location:action.payload
    }
  } else{
    return{
      location:[state.location.flat().map((e:any)=>JSON.parse(JSON.stringify((e)))),action.payload]  
    }
  }  
  },
    deleteLocationWeather:(state,action)=>({
      ...state,
      location:state.location.flat().filter((element:any) => JSON.parse(JSON.stringify((element))).id !== action.payload)
    })
  }
})




export const {loadLocationWeather,deleteLocationWeather} = LocationWeatherSlice.actions

export default LocationWeatherSlice.reducer