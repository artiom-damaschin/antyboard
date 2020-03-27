import React, { FC, useState } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import { SidebarMenu, SidebarAvatar } from './components'

const StyledSider = styled(Layout.Sider)`
  background: #2f323a;
  height: 100vh;

  > span {
    color: #666666;
    font-size: 40px;
    position: absolute;
    height: 60px;
    top: -79px;
    left: 15px;
    background: #22242a;
    &:hover {
      color: white;
      border-color: white;
      background: #22242a;
    }
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  overflow: hidden;
`

const Sidebar: FC = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  const [isSmallSider, setSiderSize] = useState('100%')
  const handleToggle = () => {
    setCollapsed(!isCollapsed)
  }

  const handleSiderSize = (broken: boolean) => {
    setSiderSize(broken ? '100%' : '30%')
  }

  return (
    <StyledSider
      width={isSmallSider}
      collapsible
      defaultCollapsed={false}
      collapsed={isCollapsed}
      collapsedWidth={0}
      onCollapse={handleToggle}
      breakpoint="md"
      onBreakpoint={handleSiderSize}
    >
      <StyledContainer>
        <SidebarAvatar />
        <SidebarMenu />
      </StyledContainer>
    </StyledSider>
  )
}

export default Sidebar
