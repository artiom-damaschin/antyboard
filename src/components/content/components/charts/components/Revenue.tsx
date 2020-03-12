import React, { FC } from 'react'
import styled from 'styled-components'

import { TinyLineChart } from '../../../../../common/components/charts/index'
import { ServerPanel } from '../../../../../common/components/panels/index'
import { REVENUE_PANEL } from '../constants/index'

const data = [
  {
    income: 2000,
  },
  {
    income: 5000,
  },
  {
    income: 3500,
  },
  {
    income: 6000,
  },
  {
    income: 2500,
  },
  {
    income: 5500,
  },
  {
    income: 2800,
  },
  {
    income: 7000,
  },
  {
    income: 5200,
  },
  {
    income: 3800,
  },
  {
    income: 4600,
  },
  {
    income: 3200,
  },
]

const { TITLE, DESCRIPTION } = REVENUE_PANEL

const COLORS = {
  PANEL: '#4ecdc4',
}
const StyledDescription = styled.div`
  text-align: center;
  p {
    margin: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 500;

    &:last-of-type {
      padding-bottom: 20px;
    }
  }
`

const Revenue: FC = () => {
  return (
    <ServerPanel title={TITLE} color={COLORS.PANEL}>
      <TinyLineChart data={data} />
      <StyledDescription>
        <p>$ 117,980</p>
        <p>{DESCRIPTION}</p>
      </StyledDescription>
    </ServerPanel>
  )
}

export default Revenue
