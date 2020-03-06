import React, { FC } from 'react'
import styled from 'styled-components'

import { DoughnutChart } from '../../../../../../common/components/charts'
import { ServerPanel } from '../../../../../../common/components/panels'
import { SERVER_LOAD_PANEL } from '../constants'

const { TITLE, DESCRIPTION } = SERVER_LOAD_PANEL

const data = [
  { name: 'USE', value: 70 },
  { name: 'NONUSE', value: 30 },
]
const COLORS = {
  USE: '#FF6B6B',
  NONUSE: '#fff',
  PANEL: '#dfdfe1',
}

const ChartFooter = styled.div`
  padding: 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  p {
    color: #333;
    font-size: 17px;
    font-weight: 500;
  }

  span {
    color: #ff6b6b;
    font-size: 30px;
    font-weight: 600;
  }
`

const ServerLoad: FC = () => {
  return (
    <ServerPanel title={TITLE} color={COLORS.PANEL}>
      <DoughnutChart data={data} colors={COLORS} />
      <ChartFooter>
        <p>{DESCRIPTION}</p>
        <span>21%</span>
      </ChartFooter>
    </ServerPanel>
  )
}

export default ServerLoad
