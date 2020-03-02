import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'sanitize.css'
import 'antd/dist/antd.css'
import App from './App'

const mountNode = document.getElementById('app')

ReactDOM.render(<App />, mountNode)
