import React, { Suspense, memo } from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout } from 'antd'

import { Login } from './pages'
import Header from './components/header/Header'
import Content from './components/content/Content'
import { FullScreenSpinner } from './common/components/loading'
import { useAuth } from './common/context/auth-сontext'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <Suspense fallback={<FullScreenSpinner />}>
      {isLoggedIn ? (
        <Layout>
          <Header />
          <Content />
        </Layout>
      ) : (
        <Login />
      )}
    </Suspense>
  )
}

export default hot(memo(App))
