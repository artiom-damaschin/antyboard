import React, { FC } from 'react'
import styled from 'styled-components'

import { DoughnutChart } from '../../../../../../common/components/charts'
import { ServerPanel } from '../../../../../../common/components/panels'
import { DROPBOX_PANEL } from '../constants'

const { TITLE } = DROPBOX_PANEL

const data = [
  { name: 'USE', value: 60 },
  { name: 'NONUSE', value: 40 },
]
const COLORS: any = {
  USE: '#00C49F',
  NONUSE: '#FF8042',
  PANEL: '#444c57',
}

const ChartFooter = styled.div`
  padding: 0 10px 20px 10px;
  width: 100%;
  span {
    color: white;
    font-size: 17px;
    font-weight: 500;
  }
  span:first-child {
    float: left;
  }

  span:last-child {
    float: right;
  }
`

const StyledDescription = styled.p`
  color: #797979;
  font-size: 16px;
  font-weight: 500;
`

const DropBoxStatics: FC = () => {
  return (
    <ServerPanel title={TITLE} color={COLORS.PANEL}>
      <DoughnutChart data={data} colors={COLORS} />
      <StyledDescription>April 04, 2019</StyledDescription>
      <ChartFooter>
        <span>17 GB</span>
        <span>60% Used</span>
      </ChartFooter>
    </ServerPanel>
  )
}

export default DropBoxStatics
