import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Main from '~components/Main'

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
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))
