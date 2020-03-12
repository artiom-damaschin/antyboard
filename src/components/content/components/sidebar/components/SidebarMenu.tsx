import React, { FC } from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'
import {
  DashboardFilled,
  TagFilled,
  EnvironmentFilled,
  WechatFilled,
} from '@ant-design/icons'

const StyledMenu = styled(Menu)`
  background: #2f323a;
  margin-top: 15%;

  li {
    height: 3.5em;
    line-height: 3.5em;
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
    }
  }
`

const SidebarMenu: FC = () => {
  return (
    <StyledMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <DashboardFilled />
        <span>Dashboard</span>
      </Menu.Item>
      <Menu.Item>
        <TagFilled />
        <span>Support Tickets</span>
      </Menu.Item>
      <Menu.Item>
        <WechatFilled />
        <span>Chat Room</span>
      </Menu.Item>
      <Menu.Item>
        <EnvironmentFilled />
        <span>Google Maps</span>
      </Menu.Item>
    </StyledMenu>
  )
}

export default SidebarMenu
