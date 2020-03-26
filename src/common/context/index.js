import React from 'react'

import { AuthProvider } from './auth-сontext'
import { StyleProvider } from './style-context'

const AppProviders = ({ children }) => (
  <AuthProvider>
    <StyleProvider>{children}</StyleProvider>
  </AuthProvider>
)

export default AppProviders
