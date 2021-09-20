import React from 'react'
import {connect} from 'react-redux'

import {Button, ButtonGroup} from '@material-ui/core'
import {ClearAll, Reorder, ViewList} from '@material-ui/icons'

import GameDetail from './GameDetail'
import Empty from './commons/Empty'

import '../assets/styles/favoriteGames.css'

const FavoritesGames = (props) => {

    const {favoriteGames} = props

    return (
        <div className='favorite-games-container'>
            <div className='favorite-games-options'>
                <div>
                    <Button startIcon={ <ClearAll/>}>
                    </Button>
                </div>
                <div className='favorite-games-order'>
                    <ButtonGroup variant='contained'>
                        <Button startIcon={ <ViewList/>}/>
                        <Button startIcon={ <Reorder/>}/>
                    </ButtonGroup>
                </div>
            </div>
            <div className='favorite-games-list'>
            {
                !favoriteGames.length 
                ? <Empty/>
                : (
                    favoriteGames.map(game => (
                        <GameDetail key={game.id} game={game}/>
                    ))
                )
            }
            </div>
        </div>
    )
}

//pasar a useSelect y Dispatch
const mapStateToProps = (state) => {
    return {
        favoriteGames: state.favoriteGames
    }
}

export default connect(mapStateToProps, null)(FavoritesGames)
