import { createSlice } from '@reduxjs/toolkit'
import { FilteredTemperature } from '../../actionTypes/filteredTemperature.type'


export const filteredTemperatureSlice = createSlice({
    name: 'filterTemperature',
    initialState: {} as FilteredTemperature,
    reducers: {
        loadFilteredTemperature: (state, action) => (action.payload)
    }
})


export const { loadFilteredTemperature } = filteredTemperatureSlice.actions

export default filteredTemperatureSlice.reducer