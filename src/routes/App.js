import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from '../components/commons/Layout.jsx'
import HighlightsGames from '../components/HighlightsGames.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        Aca va el contenido!
        <HighlightsGames/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
