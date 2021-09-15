import React,{useState} from 'react'
import {setFavorite} from '../actions/index'

import {Card,CardContent, CardActions, Typography, Button} from '@material-ui/core'
import {Favorite} from '@material-ui/icons'

import GenresList from './GenresList'
import PlatformList from './PlatformList'

import CarrouselList from './commons/Carrousel/CarrouselList'

const HighlightGame = ({game}) => {

    const images = [...game.short_screenshots]

    const [favorite, setFavorite] = useState(false)

    return (
        <Card className='hightlight-game'>
            <Typography variant='h5' className='name-header'>
                {game.name}
            </Typography>

            <div className='hightlight-game-info'>
                <CarrouselList images={images}/>
                <CardContent>
                    <div className='game-description'>
                        <span>Released on: {game.released}</span>
                    </div>
                    <div className='game-metacritic'>
                        <span>{game.metacritic} points on metacritic</span>
                    </div>

                    <div className='game-tags'>
                        <GenresList genres={game.genres}/>
                        <PlatformList platforms={game.platforms}/>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary'>
                        <Favorite/>
                    </Button>
                </CardActions>
            </div>
            
        </Card>
    )
}

export default HighlightGame
