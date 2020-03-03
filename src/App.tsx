import React from 'react'
import { Router } from '@reach/router'
import { hot } from 'react-hot-loader/root'

import { LoginForm, Dashboard } from './pages'

function App() {
  return (
    <Router>
      <LoginForm path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  )
}

export default hot(App)
