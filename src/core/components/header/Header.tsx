import React, { FC } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import { Navigator } from './components/index'

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
  return (
    <StyledHeader>
      <Navigator />
    </StyledHeader>
  )
}

export default Header
