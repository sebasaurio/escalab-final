import React, {useEffect, lazy, Suspense} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import parse from 'html-react-parser';
import {Container, Grid, Typography} from '@material-ui/core'
import {KeyboardBackspace} from '@material-ui/icons'

import {GET_GAME_BY_ID, GET_SCREENSHOTS_BY_GAME_ID} from '../constant/index'
import {useApiCallExtensible} from '../customHooks/useApiCall'

import GenresList from './GenresList'
import PlatformList from './PlatformList'

import Loading from './commons/Loading'

import '../assets/styles/gameDetail.css'

const CarrouselList = lazy(() => import('./commons/Carrousel/CarrouselList'))

const GameDetail = () => {
    const {id} = useParams()
    const history = useHistory()

    const {response: game, loading: loadingGame, fetchData: fetchGame} = useApiCallExtensible()
    const {response : gameScreenshots, fetchData: fetchScreenshots} = useApiCallExtensible()

    useEffect(() => {
        fetchGame({
            method: 'GET',
            url: GET_GAME_BY_ID(id)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        fetchScreenshots({
            method: 'GET',
            url: GET_SCREENSHOTS_BY_GAME_ID(id)
        })
    },[])

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        loadingGame ? (
            <Loading/>
        ): (
            <Container fixed className='game-detail-container'>
                <Grid container 
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        <KeyboardBackspace onClick={handleGoBack}/>
                </Grid>

                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" className='game-detail-title'>
                        <Typography component={'span'} variant='h5'>
                            {game.name}
                        </Typography>
                </Grid>
            
                <Suspense fallback={<Loading/>}>
                    {
                        gameScreenshots?.results?.length > 0 
                        &&  <Grid className='game-carrousel-container'>
                                <CarrouselList images={gameScreenshots.results}/>
                            </Grid>
                    }
                    
                </Suspense>
            
                <Grid className='game-detail-description'>
                    <Typography component={'span'} variant='body1'>
                        {parse(game.description)}
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
        )
    )
}

export default GameDetail
