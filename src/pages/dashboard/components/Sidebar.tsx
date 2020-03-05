import React, { FC } from 'react'

import styled from 'styled-components'
import { Layout, Avatar } from 'antd'

import UserAvatar from '../../../assets/img/ui-sam.jpg'
import SidebarMenu from './SidebarMenu'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  background: #2f323a;
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`

const StyledAvatar = styled(Avatar)`
  width: 8em;
  height: 8em;
`
const StyledContainer = styled.div`
  position: absolute;
  top: 8%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
