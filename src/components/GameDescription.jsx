import React from 'react'
import {Link} from 'react-router-dom'
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
                <Link to={`/game/${game.id}`} className='view-more'>
                    <Button size='small' color='#1c1f1c' variant='text' >
                        <Typography variant='inherit'> View more </Typography>
                    </Button>
                </Link>
            </div>

            <div className='game-detail-info'>
                <div className='game-carrousel-container'>
                    <CarrouselList images={game.short_screenshots}/>
                </div>
                <p className='game-detail-item'>
                    <span>Released on: </span> {game.released}
                </p>
                {
                    game.metacritic && (
                        <p className='game-detail-item'>
                            <span className='game-metacritic'>{game.metacritic}</span>  <span> points on metacritic</span>
                        </p>
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
