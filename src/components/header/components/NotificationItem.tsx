import React, { FC } from 'react'
import styled from 'styled-components'
import { Badge } from 'antd'

const StyledItem = styled(Badge)`
  margin-left: 15px;
  right: 1px;
  margin-top: 0;

  > span {
    font-size: 40px;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 6px;
    padding: 6px;
    cursor: pointer;

    &:hover {
      color: white;
      border-color: white;
    }
  }
`

type Props = {
  notifications: number
  children: JSX.Element
}

const NotificationItem: FC<Props> = ({ notifications, children }) => {
  return <StyledItem count={notifications}>{children}</StyledItem>
}

export default NotificationItem
