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
      timeout: 2000,
      isDisabled: false,
    },
    {
      key: 2,
      text: 'Oops! Something went wrong..',
      variant: 'error',
      icon: CloseCircleOutlined,
      timeout: 2000,
      isDisabled: false,
    },
    {
      key: 3,
      text: 'Your password will expire in 2 days!',
      variant: 'warning',
      icon: ExclamationCircleOutlined,
      timeout: 2000,
      isDisabled: false,
    },
    {
      key: 4,
      text: 'you have a one new message!',
      variant: 'info',
      icon: InfoCircleOutlined,
      timeout: 2000,
      isDisabled: false,
    },
    {
      key: 5,
      text: 'This is default status..',
      variant: 'default',
      icon: '',
      timeout: 2000,
      isDisabled: false,
    },
  ],
}

export const counterSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
})

export const {} = counterSlice.actions

export default counterSlice.reducer
