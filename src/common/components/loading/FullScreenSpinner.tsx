import React, { FC } from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const StyledSpinner = styled.div`
  height: 100vh;
  position: relative;
  background: black;
  opacity: 0.5;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const FullScreenSpinner: FC = () => (
  <StyledSpinner>
    <Spin size="large" />
  </StyledSpinner>
)

export default FullScreenSpinner
