import React, { FC } from 'react'
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { Dashboard, NotFound } from '../../utils/lazy-imports'

import Sidebar from './components/sidebar/Sidebar'

const Content: FC = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout.Content>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Layout.Content>
    </Layout>
  )
}

export default Content
