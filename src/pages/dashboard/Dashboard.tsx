import React, { FC } from 'react'

import { VisitsBarChart, ChartsGroup } from './components'

const Dashboard: FC = () => {
  return (
    <>
      <VisitsBarChart />
      <ChartsGroup />
    </>
  )
}

export default Dashboard
