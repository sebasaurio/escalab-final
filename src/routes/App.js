import React, {lazy} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Layout from '../components/commons/Layout'
import NotFound from '../components/commons/NotFound'
import ErrorBoundary from '../hoc/ErrorBoundary'

const TopGames = lazy(() => import('../containers/TopGames'))
const GamesInPlatform = lazy(() => import('../containers/GamesInPlatform'))
const FavoriteGames = lazy(() => import('../containers/FavoriteGames'))
const GameDetail = lazy(() => import('../components/GameDetail'))

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
              <Route exact path='/' render={() => <TopGames/>}/>
              <Route exact path='/game/top' render={() => <TopGames/>}/>
              <Route exact path='/game/platforms' render={() => <GamesInPlatform/>}/>
              <Route exact path='/game/favorites' render={() => <FavoriteGames/>}/>
              <Route path='/game/:id' render={() => <ErrorBoundary> <GameDetail/> </ErrorBoundary>}/>

              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
