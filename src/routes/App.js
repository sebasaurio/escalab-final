import React, {lazy} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from 'components/commons/Layout'
import NotFound from 'components/commons/NotFound'

const TopGames = lazy(() => import('containers/TopGames'))
const GamesInPlatform = lazy(() => import('containers/GamesInPlatform'))
const FavoriteGames = lazy(() => import('containers/FavoriteGames'))
const GameDetail = lazy(() => import('components/GameDetail'))

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
              <Route exact path='/' render={() => <TopGames/>}/>
              <Route exact path='/game/top' render={() => <TopGames/>}/>
              <Route exact path='/game/platforms' render={() => <GamesInPlatform/>}/>
              <Route exact path='/game/favorites' render={() => <FavoriteGames/>}/>
              <Route path='/game/:id' render={() => <GameDetail/>}/>
              <Route render={() => <NotFound/>}/>
            </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
