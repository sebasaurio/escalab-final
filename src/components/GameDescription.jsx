import React from 'react'

import {Typography, Button} from '@material-ui/core'
import CarrouselList from './commons/Carrousel/CarrouselList'

import GenresList from './GenresList'
import PlatformList from './PlatformList'

import '../assets/styles/gameDetail.css'

const GameDetail = ({game}) => {
    return (
        <>
            <div className='game-detail-header'>
                <Typography variant='h5' className='name-header'>
                    {game.name}
                </Typography>
                <Button size='small' color='primary' variant='text' className='view-more'>
                    <Typography variant='inherit'> View more </Typography>
                </Button>
            </div>

            <div className='game-detail-info'>
                <CarrouselList images={game.short_screenshots}/>
                <div className='game-description'>
                    <span>Released on: </span> {game.released}
                </div>
                {
                    game.metacritic && (
                        <div className='game-metacritic'>
                            <span>{game.metacritic} points on metacritic</span>
                        </div>
                    )
                }
                <div className='game-tags'>
                    <GenresList genres={game.genres}/>
                    <PlatformList platforms={game.platforms}/>
                </div>
            </div>
        </>
    )
}

export default GameDetail
