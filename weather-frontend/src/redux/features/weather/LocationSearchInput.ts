import { createSlice } from '@reduxjs/toolkit'


export const searchLocationSlice = createSlice({
  name: 'locationSearch',
  initialState: '',
  reducers: {
    loadLocationSearchValue: (state, action) => (action.payload),
  },
})


export const { loadLocationSearchValue } = searchLocationSlice.actions

export default searchLocationSlice.reducer