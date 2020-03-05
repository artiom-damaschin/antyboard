import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

import NotificationBar from './NotificationBar'

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
  <>
    <StyledMenuUnfold />
    <Logo>LOGO</Logo>
    <NotificationBar />
    <Button type="primary">Logout</Button>
  </>
)

export default Navigator
