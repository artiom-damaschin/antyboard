import React, { FC } from 'react'
import { LineChart, Line, Tooltip } from 'recharts'

type ILineChart = {
  data: any
  width?: number
  height?: number
}

const TinyLineChart: FC<ILineChart> = ({ data }) => {
  return (
    <LineChart width={200} height={200} data={data}>
      <Tooltip />
      <Line type="monotone" dataKey="income" stroke="white" strokeWidth={2} />
    </LineChart>
  )
}

export default TinyLineChart
