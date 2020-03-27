import React, { FC } from 'react'
import styled from 'styled-components'
import { opacity, margin, OpacityProps, MarginProps } from 'styled-system'
import {
  ProfileOutlined,
  BellOutlined,
  MessageOutlined,
} from '@ant-design/icons'

import NotificationItem from './NotificationItem'

const NotificationItems = styled.div<MarginProps & OpacityProps>`
  ${margin}
  ${opacity}
  width: 100%;
`

const NotificationBar: FC = () => (
  <NotificationItems opacity={[0, 1]} ml={[null, '5em', '10em']}>
    <NotificationItem notifications={4}>
      <ProfileOutlined />
    </NotificationItem>
    <NotificationItem notifications={5}>
      <MessageOutlined />
    </NotificationItem>
    <NotificationItem notifications={7}>
      <BellOutlined />
    </NotificationItem>
  </NotificationItems>
)

export default NotificationBar
