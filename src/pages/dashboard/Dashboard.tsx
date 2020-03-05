import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Layout } from 'antd'

const { Footer, Content } = Layout

import Navigator from '../dashboard/components/Navigator'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

const StyledContent = styled(Content)`
  height: 100vh;
`

const Dashboard: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Navigator />
      <Layout>
        <Sidebar />
        <StyledContent>Content</StyledContent>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Dashboard
