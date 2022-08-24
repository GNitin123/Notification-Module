import { createSlice } from '@reduxjs/toolkit'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'

const initialState = {
  notificationList: [
    {
      key: 1,
      text: 'Your data have been saved',
      variant: 'success',
      icon: CheckCircleOutlined,
      timeout: 5000,
      isHidden: false,
    },
    {
      key: 2,
      text: 'Oops! Something went wrong..',
      variant: 'error',
      icon: CloseCircleOutlined,
      timeout: 6500,
      isHidden: false,
    },
    {
      key: 3,
      text: 'Your password will expire in 2 days!',
      variant: 'warning',
      icon: ExclamationCircleOutlined,
      timeout: 7500,
      isHidden: false,
    },
    {
      key: 4,
      text: 'You have a one new message!',
      variant: 'info',
      icon: InfoCircleOutlined,
      timeout: 8500,
      isHidden: false,
    },
    {
      key: 5,
      text: 'This is default status..',
      variant: 'default',
      icon: '',
      timeout: 9500,
      isHidden: false,
    },
  ],
}

export const counterSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    hideNotificationAlert: (state, action) => {
      state.notificationList = state.notificationList.map(notification => {
        if (notification.variant === action.payload) {
          return {
            ...notification,
            isHidden: !notification.isHidden,
          }
        }
        return notification
      })
    },
  },
})

export const { hideNotificationAlert } = counterSlice.actions

export default counterSlice.reducer
