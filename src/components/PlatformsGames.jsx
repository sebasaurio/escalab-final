import React from 'react'
import {useSelector} from 'react-redux'
import {Grid} from '@material-ui/core'

import HighlightGame from './HighlightGame'
import ErrorBoundary from '../hoc/ErrorBoundary'

import '../assets/styles/favoriteGames.css'

const PlatformsGames = () => {
    const games = useSelector((state) => state.games)

    return (
        <ErrorBoundary>
            <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center">
                {
                games.map(game => (
                        <HighlightGame game={game} key={game.id}/>
                    ))  
                }
            </Grid>
        </ErrorBoundary>
    )
}

export default PlatformsGames
