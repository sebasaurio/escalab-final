import React, {lazy, Suspense} from 'react'
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
         <Suspense fallback={<span>Cargando</span>}>
          <Switch>
              <Route exact path='/' />
              <Route exact path='/game/top' render={() => <TopGames/>}/>
              <Route exact path='/game/platforms' render={() => <GamesInPlatform/>}/>
              <Route exact path='/game/favorites' render={() => <FavoriteGames/>}/>
              <Route path='/game/:id' render={() => <GameDetail/>}/>
              <Route component={NotFound}/>
            </Switch>
         </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
