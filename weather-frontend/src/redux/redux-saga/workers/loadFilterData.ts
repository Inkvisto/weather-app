import {put,PutEffect,select, SelectEffect} from 'redux-saga/effects'
import {WeatherFilters} from '../../actionTypes/filters.const'
import {filter,data, location} from '../selectors'
import React from 'react'
import { Weather } from '../../actionTypes/weatherData.type'
import { Daily } from '../../actionTypes/dailyWeather.type'



const filterArrayTemperature = (temperature:number[],filter:string) => {

  switch(filter) {
    case WeatherFilters.CELSIUM:
       
      return {temperature:temperature.map((e)=>Math.round(e)-273+'\xB0C')}
    
    break;
   case WeatherFilters.KELVIN:

   
    return {temperature:temperature.map((e)=> Math.round(e)+'\xB0K')}
    
    break;
    case WeatherFilters.FAHRENHEIT:
      return {temperature:temperature.map((e)=>(1.8*(Math.round(e)-273)+32).toFixed()+'\xB0F')}
    break;
    default:
      return []
}
}



 const  filterTemperature = (temperature:number,filter:string) =>{

   
    switch (filter) {
      case WeatherFilters.CELSIUM: 
      
        return [ Math.round(temperature)-273+'\xB0C']

     break; 
      case WeatherFilters.KELVIN:
          return [ Math.round(temperature)+'\xB0K']
        break;
        case WeatherFilters.FAHRENHEIT:
            return [ (1.8*(Math.round(temperature)-273)+32).toFixed()+'\xB0F']
          
          
          break;
      default:
        return []
    }
  }





export function* loadFilterData(day:Daily):Generator<PutEffect | SelectEffect,void,any>{





    const currentData:Weather = yield select(data)
   
    
    const current = currentData.main?.temp 

    
     
const locationData:any = yield select(location)


const locationTemperature = locationData.location && locationData.location.flat().map((e:any)=>e.temperature) 


    const filterName:any = yield select(filter)

      
const arr = [272.28, 272.57, 271.48,275.12]

      const values = ({
        current:current && filterTemperature(current,filterName),
        currentNames:['Temp:','Min:','Max:','Feels_like:'],
        dailyWeather:day.temperature && filterArrayTemperature(day.temperature,filterName),
        location:locationTemperature && filterArrayTemperature(locationTemperature,filterName),
       
      })
// detailedCurrentTemperature:getVisibleData(arr,'null',['null'],[12],filterName), 
    
   yield put({type:'filterTemperature/loadFilteredTemperature',payload:values})
  
    
}

