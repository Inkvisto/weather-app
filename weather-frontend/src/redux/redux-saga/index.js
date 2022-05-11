import {call, put, take, takeEvery,select,fork, spawn, all, SagaReturnType, CallEffect, SelectEffect, TakeEffect, ForkEffect, PutEffect} from 'redux-saga/effects'

import {cityName, coords, daily, data, locationName,location} from './selectors'


import {loadData} from './workers/loadData'
import { loadOneCallWeather } from './workers/loadOneCallData'
import {loadFilterData} from './workers/loadFilterData'
import { loadSearchValue } from '../features/weather/SearchInput'
import { setTemperatureFilter } from '../features/weather/SetTemperatureFilter'
import { loadLocationSearchValue } from '../features/weather/LocationSearchInput'
import { deleteLocation, loadAddLocationData, reloadLocationData } from './workers/loadAddLocationData'
import { deleteLocationWeather, loadLocationWeather } from '../features/weather/LocationWeather'
import { loadloginSuccess } from '../features/login/loginSuccess'


export function* loadLocationData(){
    const locationData = yield select(locationName)  
    
    yield call(loadAddLocationData,locationData)
}



export function* loadSaga(){

    const city = yield select(cityName)



     yield call(loadData,city)


    const coord = yield select(coords)
   

  yield call(loadOneCallWeather,coord)
  

    const day = yield select(daily)

  

    yield call(loadFilterData,day)
    
}

export function* filterSaga(){
    const day = yield select(daily)
   
    yield call(loadFilterData,day)
}

export function* filterWatcherSaga(){
    yield takeEvery(setTemperatureFilter,filterSaga)
}

export function* mainSaga() {
    
   yield takeEvery(loadSearchValue,loadSaga)
   yield takeEvery(loadLocationSearchValue,loadLocationData)
   yield takeEvery(loadloginSuccess,loadLocationData)
   yield takeEvery(loadLocationWeather,filterSaga)
}



export default function* rootSaga() {
    const sagas =  [mainSaga,filterWatcherSaga];
    yield fork(loadLocationData)
    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
        while(true){
           
            try{
              
                yield call(saga);
                
                
               
            } catch(e){
                console.log(e);
            } 
            }
        })
    })
    yield all(retrySagas)
  
}



