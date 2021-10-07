import React, {useEffect, lazy, Suspense, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Typography} from '@material-ui/core'

import {GET_GAME_BY_ID, GET_SCREENSHOTS_BY_GAME_ID} from 'constant/index'
import {useApiCallExtensible, useApiCall} from 'customHooks/useApiCall'

import GenresList from './GenresList'
import PlatformList from './PlatformList'
import ErrorBoundary from 'hoc/ErrorBoundary'

import Loading from './commons/Loading'

import 'assets/styles/gameDetail.css'

const CarrouselList = lazy(() => import('./commons/Carrousel/CarrouselList'))


const GameDetail = () => {
    const {id} = useParams()

    const {response: game, loading: loadingGame, fetchData: fetchGame} = useApiCall({
        method: 'GET',
        url: GET_GAME_BY_ID(id)
    })

    const {response : gameScreenshots, fetchData: fetchScreenshots} = useApiCall({
        method: 'GET',
        url: GET_SCREENSHOTS_BY_GAME_ID(id)
    })

    return (
        loadingGame ? (
           <Loading/>
       ): (
        <ErrorBoundary>
            <Container fixed className='game-detail-container'>
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" className='game-detail-title'>
                        <Typography variant='h5'>
                            {game.name}
                        </Typography>
                </Grid>

                <Grid>
                    <CarrouselList images={gameScreenshots.results}/>
                </Grid>

                <Grid className='game-detail-description'>
                    <Typography variant='body1'>
                        {
                            game.description
                        }
                    </Typography>
                </Grid>

                <Grid className='game-detail-lists-tag'>
                    <GenresList genres={game.genres}/>
                    <PlatformList platforms={game.platforms.flatMap(inner => inner.platform)}/>
                </Grid>

                {
                    game.website && <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
                        <a href={game.website} rel='noopener noreferrer' target='_blank' className='game-website-link'> Visit game page </a>
                    </Grid>
                }

            </Container>
        </ErrorBoundary>
       )
    )
}

export default GameDetail
