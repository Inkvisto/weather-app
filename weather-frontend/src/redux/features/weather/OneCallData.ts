import { createSlice } from '@reduxjs/toolkit'
import { OneCallData } from '../../actionTypes/OneCallData.type'

export const oneCallApiSlice = createSlice({
    name: 'oneCallDataApi',
    initialState: {} as Partial<OneCallData>,
    reducers: {
        loadOneCallData: (state, action) => (action.payload)
    }
})


export const { loadOneCallData } = oneCallApiSlice.actions

export default oneCallApiSlice.reducer