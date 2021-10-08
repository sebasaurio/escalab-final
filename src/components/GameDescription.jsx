import React,{lazy, Suspense} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Typography, Button, Grid} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'

import GenresList from './GenresList'
import PlatformList from './PlatformList'
import Loading from './commons/Loading'

import useHover from 'customHooks/useHover'

import 'assets/styles/gameDescription.css'

const CarrouselList = lazy(() => import('./commons/Carrousel/CarrouselList'))

const GameDetail = ({name, id, short_screenshots, released, metacritic, genres, platforms}) => {
    const [hoverRef, isHovered] = useHover();

    return (
        <>
            <div className='game-detail-header'>
                <Typography variant='h5' className='name-header'>
                    {name}
                </Typography>
                <Link to={`/game/${id}`} className='view-more'>
                    <Button size='small' ref={hoverRef} >
                        <Typography variant='inherit'> View more </Typography>
                        {isHovered && <ArrowForward fontSize='small'/>}
                    </Button>
                </Link>
            </div>

            <Grid className='game-carrousel-container'>
                <Suspense fallback={<Loading/>}>
                    {<CarrouselList images={short_screenshots}/>}
                </Suspense>
            </Grid>

            <div className='game-detail-info'>
                <Typography variant='body1' className='game-detail-item'>
                    Released on: {released}
                </Typography>
                {
                    metacritic && (
                        <Typography variant='body1' className='game-detail-item'>
                            <span className='game-metacritic'>{metacritic}</span> points on metacritic
                        </Typography>
                    )
                }
                <div className='game-tags'>
                    <GenresList genres={genres}/>
                    <PlatformList platforms={platforms}/>
                </div>
            </div>
        </>
    )
}

GameDetail.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    short_screenshots: PropTypes.array,
    released: PropTypes.string,
    metacritic: PropTypes.number,
    genres: PropTypes.array.isRequired,
    platforms: PropTypes.array.isRequired

}

export default GameDetail
