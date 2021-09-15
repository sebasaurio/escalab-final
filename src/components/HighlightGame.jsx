import React from 'react'
import {Card, CardHeader,CardContent, CardActions, Typography, Button} from '@material-ui/core'
import {Favorite} from '@material-ui/icons'

import GenresList from './GenresList'
import PlatformList from './PlatformList'

import CarrouselList from './commons/Carrousel/CarrouselList'

const HighlightGame = ({game}) => {

    const images = [...game.short_screenshots]

    return (
        <Card className='hightlight-game'>
            <CardHeader>
                <Typography variant='h5'>
                    {game.name}
                </Typography>
            </CardHeader>
            <div className='hightlight-game-info'>

                <CarrouselList images={images}/>

                <CardContent>

                    <div className='game-description'>
                        <span>Released on: {game.released}</span>
                    </div>
                    <div className='game-metacritic'>
                        <span>{game.metacritic} points on metacritic</span>
                    </div>

                    <GenresList genres={game.genres}/>
                    <PlatformList platforms={game.platforms}/>
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
