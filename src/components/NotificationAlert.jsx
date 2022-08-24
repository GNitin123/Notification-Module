import React, { useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'

const NotificationAlert = ({
  text = '',
  variant = '',
  timeout = 0,
  Icon = null,
  isHidden = false,
  onClose = () => {},
  onTimer = () => {},
}) => {
  useEffect(() => {
    const timer =
      !isHidden &&
      setTimeout(() => {
        onTimer()
      }, timeout)
    return () => {
      timer && clearTimeout(timer)
    }
  }, [isHidden])

  return (
    <div className={`component-notification-alert ${variant} ${isHidden ? 'hide-alert' : 'open'}`}>
      <div className="component-notification-alert__icon-wrapper">
        {Icon && <Icon className="component-notification-alert__icon" />}
        <span className="component-notification-alert__text">{text}</span>
      </div>
      <CloseOutlined className="component-notification-alert__close-icon" onClick={onClose} />
    </div>
  )
}

export default NotificationAlert
