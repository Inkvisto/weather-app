import { combineReducers } from 'redux'

import getCurrentWeather from '../features/weather/GetCurrentWeather'
import searchReducer  from '../features/weather/SearchInput'
import oneCallDataReducer from '../features/weather/OneCallData'
import dailyWeatherReducer from '../features/weather/DailyWeather'
import filteredTemperatureReducer from '../features/weather/FilteredTemperature'
import setTemperatureFilterReducer from '../features/weather/SetTemperatureFilter'
import locationSearchReducer from '../features/weather/LocationSearchInput'
import locationWeatherReducer from '../features/weather/LocationWeather'
import loginSuccessReducer from '../features/login/loginSuccess'


export const rootReducer =  combineReducers({
    data:getCurrentWeather,
    filteredTemperature:filteredTemperatureReducer,
    searchValue:searchReducer,
    oneCallData:oneCallDataReducer,
    dailyWeather:dailyWeatherReducer,
    filter:setTemperatureFilterReducer,
    locationSearchValue:locationSearchReducer,
    locationWeather:locationWeatherReducer,
    loginSuccess:loginSuccessReducer,
})


export type RootState = ReturnType<typeof rootReducer>

