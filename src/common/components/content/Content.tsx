import React, { FC } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import { Layout } from 'antd'
import { Router, RouteComponentProps } from '@reach/router'
import { Dashboard } from '../../../pages'

const Content: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout.Content>
        <Router>
          <Dashboard path="dashboard" />
        </Router>
      </Layout.Content>
    </Layout>
  )
}

export default Content
