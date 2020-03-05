import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

import NotificationBar from './NotificationBar'

const Logo = styled.div`
  height: 50px;
  width: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px 77px;
  display: inline-block;
`

const Navigator = () => (
  <>
    <Logo>LOGO</Logo>
    <NotificationBar />
    <Button type="primary">Logout</Button>
  </>
)

export default Navigator
