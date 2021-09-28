import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Typography} from '@material-ui/core'

import {GET_GAME_BY_ID} from 'constant/index'
import {useApiCall} from 'customHooks/useApiCall'

import CarrouselList from './commons/Carrousel/CarrouselList'
import GenresList from './GenresList'
import PlatformList from './PlatformList'
import ErrorBoundary from 'hoc/ErrorBoundary'


import 'assets/styles/gameDetail.css'

const GameDetail = () => {
    const {id} = useParams()
   
    const {response, error, loading} = useApiCall({
        method: 'GET',
        url: GET_GAME_BY_ID(id)
    })


    return (
       loading ? (
           <div>Cargando</div>
       ): (
        <Container fixed className='game-detail-container'>
            <Grid container>
                <Grid item xs={8}>
                </Grid>
                <Grid item xs={4}>
                    {response.name}
                </Grid> 
            </Grid>
        </Container>
       )
    )
}

export default GameDetail
