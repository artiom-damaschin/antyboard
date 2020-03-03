import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import Navigator from '../dashboard/components/Navigator'

const Dashboard: FC<RouteComponentProps> = () => {
  return <Navigator />
}

export default Dashboard
