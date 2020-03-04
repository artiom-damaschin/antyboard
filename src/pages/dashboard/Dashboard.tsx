import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Layout } from 'antd'

const { Footer, Sider, Content } = Layout

import Navigator from '../dashboard/components/Navigator'
import styled from 'styled-components'

const StyledContent = styled(Content)`
  height: 100vh;
`
const StyledSider = styled(Sider)`
  background: #2f323a;
`

const Dashboard: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Navigator />
      <Layout>
        <StyledSider>Sider</StyledSider>
        <StyledContent>Content</StyledContent>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Dashboard
