import {call, CallEffect, put,PutEffect} from 'redux-saga/effects'

import { language } from '../../../Intl/language';
import { Weather } from '../../actionTypes/weatherData.type';

async function callApi(city:string){

    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99571193233b96b25a76e89ad7a0716a&lang=${language}&units=standart`)
    .then((data)=>data.json())
    .catch((err)=>console.warn('Weather Api',err))

}

export function* loadData(cityName:string):Generator<PutEffect|CallEffect,void,typeof data> {

    const data:Weather = yield call(callApi,cityName)
  
    yield put({type:'currentWeather/getCurrentWeather', payload: data})
    
}

