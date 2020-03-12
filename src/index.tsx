import React from 'react'
import ReactDOM from 'react-dom'

import 'sanitize.css'
import 'antd/dist/antd.css'

import App from './App'
import AppProviders from './common/context'

const mountNode = document.getElementById('app')

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  mountNode,
)
