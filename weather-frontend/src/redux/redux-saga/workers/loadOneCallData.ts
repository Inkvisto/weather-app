import {call,CallEffect,put, PutEffect} from 'redux-saga/effects'

import { OneCallData } from '../../actionTypes/OneCallData.type'
import { language } from '../../../Intl/language'


export async function oneCallApi(lat:string,lon:string){

      return await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&appid=99571193233b96b25a76e89ad7a0716a&lang=${language}`)
      .then((data) => data.json())
      .catch((err)=>console.warn('Weather Api',err))

  }

  
  export function* loadOneCallWeather(coord:{lat:string,lon:string}):Generator<CallEffect|PutEffect,void,typeof oneCallData> {
   
    const lat = coord.lat
    const lon = coord.lon

    const oneCallData:OneCallData = yield call(oneCallApi,lat,lon)

    yield put({type:'oneCallDataApi/loadOneCallData',payload:oneCallData})



    const daily = oneCallData.daily.slice(1,4)

   
    let dailyTemperatureMin = daily.map((e)=>e.temp.min)
    let dailyTemperatureMax = daily.map((e)=>e.temp.max)

    let dailyDataTime = daily.map((e)=>e.dt)
    let dailyIcons = daily.flatMap((e)=>e.weather.map((e)=>e.icon))
    let dailyDescription = daily.flatMap((e)=>e.weather.map((e)=>e.description))

 

      yield put({type:'dailyWeather/loadDailyWeather',
     payload:{temperature:[...dailyTemperatureMin,...dailyTemperatureMax],icons:dailyIcons,description:dailyDescription,dataTime:dailyDataTime}
  })
  
  }

 