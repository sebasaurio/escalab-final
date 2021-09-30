import React,{lazy, Suspense} from 'react'
import {Link} from 'react-router-dom'
import {Typography, Button} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'

import GenresList from './GenresList'
import PlatformList from './PlatformList'
import Loading from './commons/Loading'

import useHover from '../customHooks/useHover'

import '../assets/styles/gameDescription.css'

const CarrouselList = lazy(() => import('./commons/Carrousel/CarrouselList'))

const GameDetail = ({game}) => {
    const [hoverRef, isHovered] = useHover();

    return (
        <>
            <div className='game-detail-header'>
                <Typography variant='h5' className='name-header'>
                    {game.name}
                </Typography>
                <Link to={`/game/${game.id}`} className='view-more'>
                    <Button size='small' color='#1c1f1c' variant='text' ref={hoverRef} >
                        <Typography variant='inherit'> View more </Typography>
                        {isHovered && <ArrowForward fontSize='small'/>}
                    </Button>
                </Link>
            </div>

            <div className='game-detail-info'>
                    <div className='game-carrousel-container'>
                    <Suspense fallback={<Loading/>}>
                            <CarrouselList images={game.short_screenshots}/>
                    </Suspense>
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
