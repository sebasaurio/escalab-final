import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {compose} from 'redux'

import {createStore, applyMiddleware} from 'redux' 
import logger from 'redux-logger'

import { reducer } from './reducers';

import App from './routes/App';

import '../src/assets/styles/main.css'

//init state
const initialState = {
  games: [],
  favoriteGames : [],
  sectionActive : 'Top',
  platformActive : ''
}

//apply middlewares
const middlewares = []
if (process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//set store
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
