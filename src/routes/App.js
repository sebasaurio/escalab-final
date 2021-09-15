import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from '../components/commons/Layout'
import HighlightsGames from '../components/HighlightsGames'
import PlatformGames from '../components/PlatformsGames'
import FavoriteGames from '../components/FavoritesGames'
import NotFound from '../components/commons/NotFound' 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/top' component={HighlightsGames}/>
          <Route exact path='/platforms' component={PlatformGames}/>
          <Route exact path='/favorites' component={FavoriteGames}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
