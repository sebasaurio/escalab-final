import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from '../components/commons/Layout'

import TopGames from '../containers/TopGames'
import GamesInPlatform from '../containers/GamesInPlatform'
import FavoriteGames from '../containers/FavoriteGames';
import GameDetail from '../components/GameDetail'

import NotFound from '../components/commons/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/game/top' component={TopGames}/>
          <Route exact path='/game/platforms' component={GamesInPlatform}/>
          <Route exact path='/game/favorites' component={FavoriteGames}/>
          <Route path='/game/:id' component={GameDetail}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
