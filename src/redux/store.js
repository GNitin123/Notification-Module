import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
