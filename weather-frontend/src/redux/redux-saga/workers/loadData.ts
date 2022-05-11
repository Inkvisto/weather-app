
import {call, CallEffect, put,PutEffect} from 'redux-saga/effects'

import React from 'react'
import { language } from '../../../Intl/language';

async function callApi(city:string){

    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99571193233b96b25a76e89ad7a0716a&lang=${language}&units=standart`);


    const data = await request.json();
   
  
    
    return data 
}


export function* loadData(cityName:string):Generator<PutEffect|CallEffect,void,typeof data> {

    const data:object = yield call(callApi,cityName)
   
    
    yield put({type:'currentWeather/getCurrentWeather',payload:data})
}

