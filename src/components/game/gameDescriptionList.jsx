import React,{lazy, Suspense} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Typography, Button, Grid} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'

import GenresList from '../genre/GenresList'
import PlatformList from '../platform/PlatformList'
import Loading from '../commons/Loading'

import useHover from '../../customHooks/useHover'

import '../../assets/styles/gameDescription.css'

const CarrouselList = lazy(() => import('../commons/Carrousel/CarrouselList'))

const GameDescriptionList = ({name, id, short_screenshots, genres, platforms}) => {
    const [hoverRef, isHovered] = useHover();

    return (
       
        <Grid container spacing={1} className='game-list'>
            <Grid item xs={7} className='game-carrousel-container'>
                <Suspense fallback={<Loading/>}>
                    <CarrouselList images={short_screenshots} />
                </Suspense>
            </Grid>
            <Grid item xs={5}>
                <div className='game-detail-header'>
                    <Typography variant='h5' className='name-header'>
                        {name}
                    </Typography>
                </div>
                <div className='game-tags'>
                    <GenresList genres={genres}/>
                    <PlatformList platforms={platforms}/>
                </div>
                <div className='game-view-more-list'>
                    <Link to={`/game/${id}`} className='view-more'>
                        <Button size='small' ref={hoverRef} >
                            <Typography variant='inherit'> View more </Typography>
                            {isHovered && <ArrowForward fontSize='small'/>}
                        </Button>
                    </Link>
                </div>
            </Grid>
        </Grid>
        
    )
}

GameDescriptionList.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    short_screenshots: PropTypes.array,
    released: PropTypes.string,
    metacritic: PropTypes.number,
    genres: PropTypes.array.isRequired,
    platforms: PropTypes.array.isRequired

}

export default GameDescriptionList
