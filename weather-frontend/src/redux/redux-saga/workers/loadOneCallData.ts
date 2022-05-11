import {call,CallEffect,put, PutEffect, select, StrictEffect} from 'redux-saga/effects'
import { loadDailyWeather } from '../../features/weather/DailyWeather'
import { loadOneCallData } from '../../features/weather/OneCallData'
import { coords } from '../selectors'

import { OneCallData } from '../../actionTypes/OneCallData.type'
import { language } from '../../../Intl/language'


export async function oneCallApi(lat:string,lon:string){
      const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&appid=99571193233b96b25a76e89ad7a0716a&lang=${language}`)

      const oneCallData  = await request.json()
    
      
      return oneCallData;
  }

  
  export function* loadOneCallWeather(coord:{coord:{lat:string,lon:string}}):Generator<CallEffect|PutEffect,void,typeof oneCallData> {
  
    
const lat = coord.coord.lat
const lon = coord.coord.lon



      const oneCallData:OneCallData = yield call(oneCallApi,lat,lon)

  
      const dailyIcons:string[] = []
      const dailyDescription:string[] = []
      

      yield put({type:'oneCallDataApi/loadOneCallData',payload:oneCallData})


    let dailyMinTemperature = oneCallData.daily.slice(1,4).map((e)=>e.temp.min)
    let dailyMaxTemperature = oneCallData.daily.slice(1,4).map((e)=>e.temp.max)
  
   let dailyDataTime = oneCallData.daily.slice(1,4).map((e)=>{
     return e.dt
   })
   

 oneCallData.daily.slice(1,4).map((e)=>e.weather.map((e)=>dailyIcons.push(e.icon)))

 oneCallData.daily.slice(1,4).map((e)=>e.weather.map((e)=>dailyDescription.push(e.description)))

      yield put({type:'dailyWeather/loadDailyWeather',
     payload:[[dailyMinTemperature,dailyMaxTemperature],dailyIcons,dailyDescription,dailyDataTime]
  })
  
  }

 