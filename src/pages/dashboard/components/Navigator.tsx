import React from 'react'

import { Layout, Button } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

import styled from 'styled-components'
import NotificationBar from './NotificationBar'

const { Header } = Layout

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #22242a;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1001;
  padding: 0 15px;
  min-height: 8em;
`
const Logo = styled.div`
  height: 50px;
  width: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px 77px;
  display: inline-block;
`

const StyledMenuUnfold = styled(MenuUnfoldOutlined)`
  color: #666666;
  font-size: 40px;

  &:hover {
    color: white;
    border-color: white;
  }
`

const Navigator = () => (
  <StyledHeader>
    <StyledMenuUnfold />
    <Logo>LOGO</Logo>
    <NotificationBar />
    <Button type="primary">Logout</Button>
  </StyledHeader>
)

export default Navigator
