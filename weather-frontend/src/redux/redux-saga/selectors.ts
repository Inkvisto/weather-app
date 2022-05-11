import { RootState } from "../reducers/rootReducer"

export const cityName = (state:RootState) => state.searchValue

export const coords = (state:RootState) => state.data

export const filter = (state:RootState) => state.filter

export const daily = (state:RootState) => state.dailyWeather

export const data = (state:RootState) => state.data

export const locationName = (state:RootState) => state.locationSearchValue

export const location = (state:RootState) => state.locationWeather

export const loginSuccess = (state:RootState) => state.loginSuccess
