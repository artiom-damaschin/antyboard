import React, { FC } from 'react'
import styled from 'styled-components'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    visits: 4000,
  },
  {
    name: 'Feb',
    visits: 3000,
  },
  {
    name: 'Mar',
    visits: 2000,
  },
  {
    name: 'Apr',
    visits: 2780,
  },
  {
    name: 'May',
    visits: 1890,
  },
  {
    name: 'Jun',
    visits: 2390,
  },
  {
    name: 'Jul',
    visits: 3490,
  },
  {
    name: 'Aug',
    visits: 3125,
  },
  {
    name: 'Sep',
    visits: 2900,
  },
  {
    name: 'Oct',
    visits: 3010,
  },
  {
    name: 'Nov',
    visits: 5490,
  },
  {
    name: 'Dec',
    visits: 3490,
  },
]

const UserBarChart: FC = () => {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 0,
        bottom: 20,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="visits" fill="#4ECDC4" barSize={25} />
    </BarChart>
  )
}

export default UserBarChart
