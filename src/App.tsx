import React from 'react'
import GlobalStyles from './styles/global'

import Main from 'components/Main/index'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Main />
      </>
    </ThemeProvider>
  )
}

export default App
