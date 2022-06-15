import { AxiosResponse } from 'axios';
import { call, CallEffect, CancelEffect, ForkEffect, put, PutEffect, select, SelectEffect, TakeEffect } from 'redux-saga/effects'


import { AddLocationApi } from '../../../api/AddLocation.api';
import { User } from '../../../api/types';
import { language } from '../../../Intl/language';
import { Weather } from '../../actionTypes/weatherData.type';
import { loadLocationWeather } from '../../features/weather/LocationWeather';
import store from '../../store';
import { loginSuccess } from '../selectors';


async function callLocationApi(city: string) {

    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99571193233b96b25a76e89ad7a0716a&lang=${language}&units=standart`);
    return await request.json();

}


export function* loadAddLocationData(cityName: string): Generator<PutEffect | CallEffect | TakeEffect | CancelEffect | ForkEffect | SelectEffect, void, typeof weatherData> {

    const user:any = yield select(loginSuccess)

    const loadLocationData = async () => {
        const locationItems = await AddLocationApi.getLocation(user?.id).catch((e) => AddLocationApi.refresh())
        return locationItems
    }


    const createLocationData: any = async (location: any) => {
        return await AddLocationApi.createLocation({
            temperature: location.main.temp,
            place: location.name,
            icon: location.weather[0].icon
        })
    }


    const updateLocationData: any = async (id: string, temp: number, icon: string) => {
        return await AddLocationApi.updateLocation({
            id: id,
            temp: temp,
            icon: icon
        })
    }


    const weatherData: Weather | {cod:string,message:string} = yield call(callLocationApi, cityName)

    

    if (weatherData.cod !== '404') {
        try {
            const response: any = yield call(createLocationData, weatherData)
            yield put({ type: 'locationWeather/loadLocationWeather', payload: response.data })
        } catch (e) {
            const locationItems:any = yield call(loadLocationData);


            for (let data of locationItems.data) {
                (async () => {
                    const temp = await callLocationApi(data.place)
                    await updateLocationData(data.id, temp.main.temp, data.icon)
                    const locationItem: any = await loadLocationData()
                    store.dispatch(loadLocationWeather(locationItem.data))
                })()

            }
        }


    }
}

















  
  

