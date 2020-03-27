import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Main from '~components/Main'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))
