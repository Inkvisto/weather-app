
import {call, CallEffect, cancel, CancelEffect, ForkEffect, put,PutEffect, select, SelectEffect, take, TakeEffect, takeEvery} from 'redux-saga/effects'

import axios from 'axios';
import { config } from 'process';
import Cookies from 'universal-cookie/es6';
import { AddLocationApi } from '../../../api/AddLocation.api';
import { location, loginSuccess } from '../selectors';
import { deleteLocationWeather } from '../../features/weather/LocationWeather';
import { RootState } from '../../reducers/rootReducer';
import { language } from '../../../Intl/language';



async function callLocationApi(city:string){
  
    if(city !== '' || typeof city === 'string'){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99571193233b96b25a76e89ad7a0716a&lang=${language}&units=standart`);


    const data = await request.json();
   
  
    
    return data 
    }
   return  null
}






   

    
   
    



export function* loadAddLocationData(cityName:any):Generator<PutEffect|CallEffect|TakeEffect|CancelEffect|ForkEffect|SelectEffect,void,typeof weatherData> {
 
    const cookie = {authToken:document.cookie.slice(10)}


     const loadLocationData = async() => {
        const {data}:any = await AddLocationApi.getUserfromToken(cookie)
        const userId = {id:data.id}
      
       
         const locationItems= await AddLocationApi.getLocation(userId)
        
        return locationItems       
     } 

    
       
     const locationItems:any = yield call(loadLocationData)



    const weatherData:any = yield call(callLocationApi,cityName)

  

 
 
    const  createLocationData:any = async()=>{
            return await AddLocationApi.createLocation({
            temperature:weatherData.main.temp,
            place:weatherData.name,
            icon:weatherData.weather[0].icon 
        })
  
    }


if( weatherData.cod !== '404'){
  
    try{
    const response:any = yield call(createLocationData)
    yield put({type:'locationWeather/loadLocationWeather',payload:response.data})
        
        
    }catch(e){
      yield put({type:'locationWeather/loadLocationWeather',payload:locationItems.data})
       }
    }
    

}

















  
  

