import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {setFavorite, deleteFavorite} from '../actions/index'
import {Card, CardActions, Typography, Button} from '@material-ui/core'
import {Favorite, HighlightOff} from '@material-ui/icons'

import GameDetail from './GameDescription'

import '../assets/styles/highlightGame.css'

const HighlightGame = (props) => {
    const {game, favoriteGames} = props

    const [favorite, setFavorite] = useState(null)

    const handleSetFavorite = () => {
        props.setFavorite(game)
        setFavorite(true)
    }

    const handleRemoveFavorite = () => {
        props.deleteFavorite(game.id)
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
            <GameDetail game={game}/>
            <div>
                <CardActions className='hightlight-game-actions'>
                    {
                        !favorite ? (
                            <Button size='small' color='primary' onClick={handleSetFavorite}>
                                <Typography variant='inherit' className='action-text-button' > Add to favorite </Typography> <Favorite className='favorite-icon'/>
                            </Button>
                        )
                        : (
                            <Button size='small' color='primary' onClick={handleRemoveFavorite}>
                                <Typography variant='inherit' className='action-text-button' > Remove from favorites </Typography> <HighlightOff className='remove-icon'/>
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
    setFavorite,
    deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(HighlightGame)
