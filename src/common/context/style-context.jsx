import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from './constants/theme'

function StyleProvider({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

export { StyleProvider }

export default null
