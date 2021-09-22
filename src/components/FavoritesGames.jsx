import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {clearFavorites} from '../actions/index'
import {Button, ButtonGroup, Card} from '@material-ui/core'
import {ClearAll, ViewHeadline, ViewAgenda} from '@material-ui/icons'

import GameDetail from './GameDetail'
import Empty from './commons/Empty'

import '../assets/styles/favoriteGames.css'

const FavoritesGames = () => {
    const favoriteGames = useSelector((state) => state.favoriteGames)
    const dispatch = useDispatch()

    const handleClearFavorites = () => {
        dispatch(clearFavorites(''))
    }

    return (
        <div className='favorite-games-container'>
            <div className='favorite-games-options'>
                <Button variant='contained' startIcon={ <ClearAll/>} className='clear-all' onClick={handleClearFavorites}/>
                <ButtonGroup variant='contained'>
                    <Button startIcon={ <ViewHeadline/>}/>
                    <Button startIcon={ <ViewAgenda/>}/>
                </ButtonGroup>
            </div>
            <div className='favorite-games-list'>
            {
                !favoriteGames.length 
                ? <Empty/>
                : (
                    favoriteGames.map(game => (
                        <Card key={game.id} className='favorite-game'>
                            <GameDetail game={game}/>
                        </Card>
                    ))
                )
            }
            </div>
        </div>
    )
}

export default FavoritesGames
