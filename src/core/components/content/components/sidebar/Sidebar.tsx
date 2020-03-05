import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Layout, Avatar } from 'antd'

import { SidebarMenu, SidebarAvatar } from './components'

const StyledSider = styled(Layout.Sider)`
  background: #2f323a;
  height: 100vh;

  > span {
    color: #666666;
    font-size: 40px;
    position: absolute;
    height: 60px;
    top: -69px;
    left: 15px;
    background: #22242a;
    &:hover {
      color: white;
      border-color: white;
      background: #22242a;
    }
  }
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
  const [isCollapsed, setCollapsed] = useState(false)

  const handleToggle = () => {
    setCollapsed(!isCollapsed)
  }

  return (
    <StyledSider
      width="30%"
      collapsible
      defaultCollapsed={false}
      collapsed={isCollapsed}
      collapsedWidth={0}
      onCollapse={handleToggle}
    >
      <StyledContainer>
        <SidebarAvatar />
        <SidebarMenu />
      </StyledContainer>
    </StyledSider>
  )
}

export default Sidebar
