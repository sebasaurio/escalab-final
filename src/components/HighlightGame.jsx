import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'

import {setFavorite} from '../actions/index'

import {Card,CardContent, CardActions, Typography, Button} from '@material-ui/core'
import {Favorite, HighlightOff} from '@material-ui/icons'

import GenresList from './GenresList'
import PlatformList from './PlatformList'

import CarrouselList from './commons/Carrousel/CarrouselList'

const HighlightGame = (props) => {
    const {game, favoriteGames} = props
    const {short_screenshots} = game

    const [favorite, setFavorite] = useState(null)

    const handleSetFavorite = () => {
        props.setFavorite(game)
        setFavorite(true)
    }

    const handleRemoveFavorite = () => {
        setFavorite(false)
    }

    const IsAlreadyFavorite = () => {
        const isFavorite = favoriteGames.filter(favoriteGame => favoriteGame.id === game.id)
        isFavorite.length && setFavorite(true)
    }

    useEffect(() => {
        IsAlreadyFavorite()
    },[])

    return (
        <Card className='hightlight-game'>
            <Typography variant='h5' className='name-header'>
                {game.name}
            </Typography>

            <div className='hightlight-game-info'>
                <CarrouselList images={short_screenshots}/>
                <CardContent>
                    <div className='game-description'>
                        <span>Released on: {game.released}</span>
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

                </CardContent>
                <CardActions>
                    {
                        !favorite ? (
                            <Button size='small' color='primary' onClick={handleSetFavorite}>
                                <Favorite/>
                            </Button>
                        )
                        : (
                            <Button size='small' color='primary' onClick={handleRemoveFavorite}>
                                <HighlightOff/>
                            </Button>
                        )
                    }
                </CardActions>
            </div>
            
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteGames : state.favoriteGames
    }
}

const mapDispatchToProps  = {
    setFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(HighlightGame)
