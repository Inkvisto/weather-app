import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import { OneCallData } from '../../actionTypes/OneCallData.type'


const initialState = {
    daily:[{}],
    hourly:[{}],
    lat:undefined,
    lon:undefined,
    timezone:undefined,
    timezone_offset:undefined

} as Partial<OneCallData>



export const oneCallApiSlice = createSlice({
    name:'oneCallDataApi',
    initialState:initialState,
    reducers:{
        loadOneCallData:(state,action)=>(
           action.payload
        
        )
    }
})




export const {loadOneCallData} = oneCallApiSlice.actions

export default oneCallApiSlice.reducer