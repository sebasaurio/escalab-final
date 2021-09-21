import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'

import {setFavorite} from '../actions/index'

import {Card,CardContent, CardActions, Typography, Button} from '@material-ui/core'
import {Favorite, HighlightOff, ArrowRightAlt} from '@material-ui/icons'

import GenresList from './GenresList'
import PlatformList from './PlatformList'

import CarrouselList from './commons/Carrousel/CarrouselList'

import '../assets/styles/highlightGame.css'

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
    })

    return (
        <Card className='hightlight-game'>
            <div className='hightlight-game-header'>
                <Typography variant='h5' className='name-header'>
                    {game.name}
                </Typography>
                <Button size='small' color='primary' variant='text' className='view-more'>
                    <Typography variant='inherit'> View more </Typography>
                </Button>
            </div>

            <div className='hightlight-game-info'>
                <CarrouselList images={short_screenshots}/>
                <CardContent>
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

                </CardContent>
                <CardActions className='hightlight-game-actions'>
                    {
                        !favorite ? (
                            <Button size='small' color='primary' onClick={handleSetFavorite}>
                                <Typography variant='inherit' className='action-text-button' > Add to favorite </Typography> <Favorite/>
                            </Button>
                        )
                        : (
                            <Button size='small' color='primary' onClick={handleRemoveFavorite}>
                                <Typography variant='inherit' className='action-text-button' > Remove from favorites </Typography> <HighlightOff/>
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
