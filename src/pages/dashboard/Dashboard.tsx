import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import { VisitsBarChart, ChartsGroup } from './components'

const Dashboard: FC<RouteComponentProps> = () => {
  return (
    <>
      <VisitsBarChart />
      <ChartsGroup />
    </>
  )
}

export default Dashboard
