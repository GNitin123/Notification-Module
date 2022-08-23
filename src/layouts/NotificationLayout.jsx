import { Layout } from 'antd'
const { Header, Content } = Layout

const NotificationLayout = WrapperComponent => () => {
  return (
    <Layout className="layout-notification">
      <Header className="layout-notification__header">Notification</Header>
      <Content className="layout-notification__content">
        <WrapperComponent />
      </Content>
    </Layout>
  )
}

export default NotificationLayout
