import {put,PutEffect,SagaReturnType,select, SelectEffect} from 'redux-saga/effects'
import {WeatherFilters} from '../../actionTypes'
import { Data } from '../../actionTypes/data.type'
import { RootState } from '../../reducers/rootReducer'
import {filter,data, location} from '../selectors'
import React from 'react'





export function* loadFilterData(day:any):Generator<PutEffect | SelectEffect,void,any>{




    const currentData:Data = yield select(data)
    const current = currentData.main.temp
    

const locationData:any = yield select(location)
const locationTemperature = locationData.location.flat().map((e:any)=>e.temperature)


    const currentIcon = currentData.weather[0].icon
    const currentDescription = currentData.weather[0].description

    const filterName:any = yield select(filter)

     function getVisibleData(temperature:number|[number|number[]]|number[],icons:string,description:string,dataTime:string,filter:string){
        switch (filter) {
          case WeatherFilters.CELSIUM: 
          if(typeof temperature === 'number'){
            
            return [ Math.round(temperature)-273+'\xB0C',icons,description,dataTime]
            
          }
          else if(typeof temperature !== 'number'){
            return [temperature.map((e)=>{
              if(typeof e !== 'number'){
                return e.map((e)=>{
                return Math.round(e)-273+'\xB0C'
              })} else{
                return [temperature.map((e)=>{
                  if(typeof e === 'number'){
                  return Math.round(e)-273 +'\xB0C'}
                }),icons,description,dataTime]
              }
            }),icons,description,dataTime]
            
          }
          break;
            
           
          case WeatherFilters.KELVIN:
            if(typeof temperature === 'number'){
              return [ Math.round(temperature)+'\xB0K',icons,description,dataTime]
            }
            else if(typeof temperature !== 'number'){
              return [temperature.map((e)=>{
                if(typeof e !== 'number'){
                  return e.map((e)=>{
                  return Math.round(e)+'\xB0K'
                })} else{
                  return [temperature.map((e)=>{
                    if(typeof e === 'number'){
                    return Math.round(e) +'\xB0K'}
                  }),icons,description,dataTime]
                }
              }),icons,description,dataTime]
              
            }
            break;

            case WeatherFilters.FAHRENHEIT:
              if(typeof temperature === 'number'){
                return [ (1.8*(Math.round(temperature)-273)+32).toFixed()+'\xB0F',icons,description,dataTime]
              }
              else if(typeof temperature !== 'number'){
                return [temperature.map((e)=>{
                  if(typeof e !== 'number'){
                    return e.map((e)=>{
                      return(1.8*(Math.round(e)-273)+32).toFixed()+'\xB0F'
                  })} else{
                    return [temperature.map((e)=>{
                      if(typeof e === 'number'){
                      return(1.8*(Math.round(e)-273)+32).toFixed()+'\xB0F'}
                    }),icons,description,dataTime]
                  }
                }),icons,description,dataTime]
                
              }
              break;
          default:
            return []
        }
      }

      yield put({type:'currentTemperature/loadCurrentTemperature',payload:[current,currentIcon,currentDescription]})


   
      
const arr = [272.28, 272.57, 271.48,275.12]




      const values = ({
        currentTemperature:getVisibleData(current,currentIcon,'',currentDescription,filterName),
        detailedCurrentTemperature:getVisibleData(arr,'null','null','null',filterName),
        currentNames:['Temp:','Min:','Max:','Feels_like:'],
        dailyWeather:getVisibleData(day[0],day[1],day[2],day[3],filterName),
        location:getVisibleData(locationTemperature,'null','null','null',filterName)
      })

     
   yield put({type:'filterTemperature/loadFilteredTemperature',payload:values})
  
    
}

