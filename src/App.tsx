import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout } from 'antd'

import Header from './common/components/header/Header'
import Content from './common/components/content/Content'
import { Login } from './pages'

function App() {
  return (
    <>
      <Login />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </>
  )
}

export default hot(App)
