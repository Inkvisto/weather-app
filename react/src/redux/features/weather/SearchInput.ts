import { createSlice } from '@reduxjs/toolkit'


export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    loadSearchValue: (state, action) => (action.payload),
  },
})


export const { loadSearchValue } = searchSlice.actions

export default searchSlice.reducer