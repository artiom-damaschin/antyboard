import React from 'react'

import { AuthProvider } from './auth-сontext'

// type AppProvidersProps = {
//   children: React.ReactNode
// }
// const AppProviders = ({ children }: AppProvidersProps) => (
const AppProviders = ({ children }) => <AuthProvider>{children}</AuthProvider>

export default AppProviders
