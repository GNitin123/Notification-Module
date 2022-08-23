import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notificationList: [],
}

export const counterSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
})

export const {} = counterSlice.actions

export default counterSlice.reducer
