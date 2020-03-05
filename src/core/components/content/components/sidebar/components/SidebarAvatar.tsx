import React, { FC } from 'react'
import styled from 'styled-components'
import { Avatar } from 'antd'

import UserAvatar from '../../../../../../assets/img/ui-sam.jpg'

const StyledAvatar = styled(Avatar)`
  width: 8em;
  height: 8em;
`
const StyledName = styled.span`
  font-size: 21px;
  font-weight: 500;
  color: #f2f2f2;
`

const SidebarAvatar: FC = () => {
  return (
    <>
      <StyledAvatar src={UserAvatar} />
      <StyledName>Sam Saffes</StyledName>
    </>
  )
}

export default SidebarAvatar
