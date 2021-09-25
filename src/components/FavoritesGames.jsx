import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {clearFavorites} from 'actions/index'
import {Button, ButtonGroup, Card, List, ListItem, Grid} from '@material-ui/core'
import {ClearAll, ViewHeadline, ViewAgenda} from '@material-ui/icons'

import GameDetail from './GameDescription'
import Empty from './commons/Empty'

import 'assets/styles/favoriteGames.css'

const FavoritesGames = () => {
    const favoriteGames = useSelector((state) => state.favoriteGames)
    const dispatch = useDispatch()

    const handleClearFavorites = () => {
        dispatch(clearFavorites())
    }

    const [viewStyle, setViewStyle] = useState('Card')

    const handleChangeViewStyle = (style) => {
        setViewStyle(style)
    }

    const hasFavorites = favoriteGames.length > 0

    return (
        <div className='favorite-games-container'>
            {
                hasFavorites && (
                    <div className='favorite-games-options'>
                        <Button variant='contained' startIcon={ <ClearAll/>} className='clear-all' onClick={handleClearFavorites}/>
                        <ButtonGroup variant='contained' className='style-buttons'>
                            <Button startIcon={ <ViewHeadline/>} onClick={() => handleChangeViewStyle('List')} className={`${viewStyle === 'List' && 'button-style-active'}`}/>
                            <Button startIcon={ <ViewAgenda/>} onClick={() => handleChangeViewStyle('Card')} className={`${viewStyle === 'Card' && 'button-style-active'}`}/>
                        </ButtonGroup>
                    </div>
                )
            }
            <div className='favorite-games-list'>
            {
                !hasFavorites
                ? <Empty/>
                : (
                    viewStyle === 'Card'
                    ? (
                        favoriteGames.map(game => ( 
                            <Card key={game.id} className='favorite-game'><GameDetail game={game}/> </Card> 
                        ))
                    )
                    : (
                        <Grid container spacing={1}>
                            <List className='favorite-as-list'>
                                {
                                    favoriteGames.map(game => (
                                        <ListItem key={game.id} className='favorite-game'>
                                            <GameDetail game={game}/>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                    )
                )
            }
            </div>
        </div>
    )
}

export default FavoritesGames
