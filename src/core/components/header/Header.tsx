import React, { FC } from 'react'
import { Button, Layout } from 'antd'
import styled from 'styled-components'

import AppLogo from '../../../assets/img/logo.png'

import NotificationBar from './components/NotificationBar'

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  padding: 0 15px;
  min-height: 7em;
  background: #22242a;

  button {
    min-height: 3.5em;
    min-width: 8em;
    border-radius: 6px;

    span {
      font-size: 18px;
    }
  }
`
const Logo = styled.div`
  height: 50px;
  width: 100px;
  background-image: url(${AppLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px 77px;
  display: inline-block;
  margin-left: 5em;
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <NotificationBar />
      <Button type="primary">Logout</Button>
    </StyledHeader>
  )
}

export default Header
