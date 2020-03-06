import React, { FC } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const ChartHeader = styled.span<{ color: string }>`
  padding: 5% 0;
  font-size: 17px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  width: 100%;
  background-color: ${props => darken(0.1, props.color)};
`

const StyledChart = styled.div<{ color: string }>`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.color};
  flex-basis: 30%;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
`

type Props = {
  title: string
  color: string
  children: React.ReactNode
}

const ServerPanel: FC<Props> = ({ children, title, color }) => {
  return (
    <StyledChart color={color}>
      <ChartHeader color={color}>{title}</ChartHeader>
      {children}
    </StyledChart>
  )
}
export default ServerPanel
