import React, { FC } from 'react'
import styled from 'styled-components'

import {
  ProfileOutlined,
  BellOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import NotificationItem from '../../../common/components/NotificationItem'

const NotificationItems = styled.div`
  width: 100%;
  margin-left: 6em;
`

const NotificationBar: FC = () => (
  <NotificationItems>
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
