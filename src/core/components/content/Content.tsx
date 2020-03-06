import React, { FC } from 'react'
import { Layout } from 'antd'
import { Router, RouteComponentProps } from '@reach/router'

import { Dashboard } from '../../../pages/index'
import { NotFound } from '../../../common/components/request-results'

import Sidebar from './components/sidebar/Sidebar'

const Content: FC<RouteComponentProps> = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout.Content>
        <Router>
          <Dashboard path="dashboard" />
          <NotFound default />
        </Router>
      </Layout.Content>
    </Layout>
  )
}

export default Content
