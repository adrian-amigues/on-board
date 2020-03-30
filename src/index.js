import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { createGlobalStyle } from 'styled-components'

import Router from '~components/Router'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Router />
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))
