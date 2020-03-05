import React, { FC } from 'react'
import { Router, RouteComponentProps } from '@reach/router'

import LoginForm from './LoginForm'

const Login: FC<RouteComponentProps> = () => (
  <Router>
    <LoginForm path="/" />
  </Router>
)

export default Login
