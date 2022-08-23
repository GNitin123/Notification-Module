import React from 'react'
import NotificationLayout from '../layouts/NotificationLayout'
import { Button } from 'antd'
import { useSelector } from 'react-redux'

const ButtonList = [
  { key: 1, title: 'success' },
  { key: 2, title: 'Error' },
  { key: 3, title: 'warning' },
  { key: 4, title: 'info' },
  { key: 5, title: 'unstyled' },
]

const Notification = () => {
  const { notificationList } = useSelector(state => state.notification)
  const ButtonElement = ButtonList.map(button => (
    <Button className="components-notification__action-btn" key={button.key} size="large">
      Hide {button.title}
    </Button>
  ))

  return (
    <div className="components-notification">
      <div className="components-notification__btn-wrapper">{ButtonElement}</div>
      <div className="components-notification__alert-wrapper"></div>
    </div>
  )
}

export default NotificationLayout(Notification)
