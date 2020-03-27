import React, { FC } from 'react'
import { Button, Layout } from 'antd'
import styled from 'styled-components'

import { useAuth } from '../../common/context/auth-сontext'

import { Logo, NotificationBar } from './components'

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

const Header: FC = () => {
  const { logout } = useAuth()

  return (
    <StyledHeader>
      <Logo />
      <NotificationBar />
      <Button type="primary" onClick={logout}>
        Logout
      </Button>
    </StyledHeader>
  )
}

export default Header
