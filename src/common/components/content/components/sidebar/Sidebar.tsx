import React, { FC } from 'react'
import styled from 'styled-components'
import { Layout, Avatar } from 'antd'

import UserAvatar from '../../../../../assets/img/ui-sam.jpg'

import { SidebarMenu } from './components'

const StyledSider = styled(Layout.Sider)`
  background: #2f323a;
  height: 100vh;
`

const StyledAvatar = styled(Avatar)`
  width: 8em;
  height: 8em;
`
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`
const UserName = styled.span`
  font-size: 21px;
  font-weight: 500;
  color: #f2f2f2;
`

const Sidebar: FC = () => {
  return (
    <StyledSider width="30%" collapsed={false} collapsedWidth={0}>
      <StyledContainer>
        <StyledAvatar src={UserAvatar} />
        <UserName>Sam Saffes</UserName>
        <SidebarMenu />
      </StyledContainer>
    </StyledSider>
  )
}

export default Sidebar
