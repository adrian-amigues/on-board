import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from '~components/NavBar'
import HotPage from '~components/pages/HotPage'
import SearchPage from '~components/pages/SearchPage'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <HotPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
