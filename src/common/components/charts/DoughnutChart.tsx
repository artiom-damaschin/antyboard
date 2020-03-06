import React, { memo, FC } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

type IDoughnutChart = {
  height?: number
  width?: number
  data: { name: string; value: number }[]
  colors: { [key: string]: string }
}

const DoughnutChart: FC<IDoughnutChart> = ({
  width = 200,
  height = 200,
  data,
  colors,
}) => {
  return (
    <PieChart width={width} height={height}>
      <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value">
        {data.map(entry => (
          <Cell key={entry.name} fill={colors[entry.name]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default memo(DoughnutChart)
