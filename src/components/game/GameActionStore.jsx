import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {setFavorite, deleteFavorite} from '../../actions/index'
import {Card, CardActions, Typography, Button, Container} from '@material-ui/core'
import {Favorite, HighlightOff} from '@material-ui/icons'

import GameDescription from './GameDescription'

import '../../assets/styles/highlightGame.css'

const GameActionStore = (props) => {
    const {game, favoriteGames} = props

    const [favorite, setFavorite] = useState(false)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Container fixed>
            <Card className='hightlight-game'>
                <GameDescription 
                    name={game.name} 
                    id={game.id} 
                    short_screenshots={game.short_screenshots} 
                    released={game.released} 
                    metacritic={game.metacritic} 
                    genres={game.genres} 
                    platforms={game.platforms.flatMap(inner => inner.platform)}
                />
                <CardActions className='hightlight-game-actions'>
                    {
                        !favorite ? (
                            <Button size='small' color='primary' onClick={handleSetFavorite} className='action-text-button'>
                                <Typography variant='inherit'> Add to favorite </Typography> <Favorite className='favorite-icon'/>
                            </Button>
                        )
                        : (
                            <Button size='small' color='primary' onClick={handleRemoveFavorite} className='action-text-button'>
                                <Typography variant='inherit'> Remove from favorites </Typography> <HighlightOff className='remove-icon'/>
                            </Button>
                        )
                    }
                </CardActions>
            </Card>
        </Container>
    )
}

//usando la function que conecta el componente a redux store
const mapStateToProps = (state) => {
    return {
        favoriteGames : state.favoriteGames
    }
}

const mapDispatchToProps  = {
    setFavorite,
    deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(GameActionStore)
