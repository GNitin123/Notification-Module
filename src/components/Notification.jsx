import NotificationLayout from '../layouts/NotificationLayout'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import NotificationAlert from './NotificationAlert'
import { hideNotificationAlert } from '../redux/reducers/notificationReducer'

const actionButtonList = [
  { key: 1, title: 'success' },
  { key: 2, title: 'Error' },
  { key: 3, title: 'warning' },
  { key: 4, title: 'info' },
  { key: 5, title: 'default' },
]

const Notification = () => {
  const { notificationList } = useSelector(state => state.notification)

  const dispatch = useDispatch()

  const onClose = selectedNotification => dispatch(hideNotificationAlert(selectedNotification))

  const ActionButtons = actionButtonList.map((button, index) => (
    <Button
      className="components-notification__action-btn"
      key={button.key}
      size="large"
      onClick={() => onClose(notificationList[index].variant)}
    >
      {notificationList[index].isHidden ? 'Show' : 'Hide'} {button.title}
    </Button>
  ))

  const NotificationAlerts = notificationList.map(notification => (
    <NotificationAlert
      key={notification.key}
      text={notification.text}
      variant={notification.variant}
      timeout={notification.timeout}
      Icon={notification.icon}
      isHidden={notification.isHidden}
      onClose={() => onClose(notification.variant)}
      onTimer={() => onClose(notification.variant)}
    />
  ))

  return (
    <div className="components-notification">
      <div className="components-notification__btn-wrapper">{ActionButtons}</div>
      <div className="components-notification__alert-wrapper">{NotificationAlerts}</div>
    </div>
  )
}

export default NotificationLayout(Notification)
