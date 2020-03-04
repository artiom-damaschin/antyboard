import React, { FC } from 'react'
import styled from 'styled-components'

import { Badge } from 'antd'

const iconStyles = `
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
  `

const StyledBadge = styled(Badge)`
  margin-left: 15px;
  right: 1px;
  margin-top: 0;
`

type Props = {
  notifications: number
  children: JSX.Element
}

const NotificationItem: FC<Props> = ({ notifications, children }) => {
  const StyledIcon = styled((props: any) =>
    React.cloneElement(children, { ...props }),
  )`
    ${iconStyles}
  `

  return (
    <StyledBadge count={notifications}>
      <StyledIcon />
    </StyledBadge>
  )
}

export default NotificationItem
