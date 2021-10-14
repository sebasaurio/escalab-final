import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {clearFavorites, clearSection} from '../../actions/index'
import {Button, ButtonGroup, Card, List, ListItem, Grid, Tooltip} from '@material-ui/core'
import {ClearAll, ViewHeadline, ViewAgenda} from '@material-ui/icons'

import GameDetail from '../game/GameDescription'
import Empty from '../commons/Empty'
import RemindMe from '../remindMe/RemindMe'
import ModalPortal from '../commons/ModalPortal'

import { useModal } from '../../customHooks/useModal'

import '../../assets/styles/favoriteGames.css'

const FavoritesGames = () => {
    const favoriteGames = useSelector((state) => state.favoriteGames)
    const dispatch = useDispatch()

    const handleClearFavorites = () => {
        dispatch(clearFavorites())
    }

    const handleClearSection = () => {
        dispatch(clearSection())
    }

    const [viewStyle, setViewStyle] = useState('Card')

    const handleChangeViewStyle = (style) => {
        setViewStyle(style)
    }

    const {modal, handleCloseModal, handleOpenModal} = useModal()

    const hasFavorites = favoriteGames.length > 0

    useEffect(() => {
        //https://usehooks.com/usePrevious/
        if(!hasFavorites){
            handleClearSection()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='favorite-games-container'>
            {
                hasFavorites && (
                    <div className='favorite-games-options'>
                        <Tooltip title="Clear all">
                            <Button variant='contained' startIcon={ <ClearAll/>} className='clear-all' onClick={handleClearFavorites}/>
                        </Tooltip>
                        <ButtonGroup variant='contained' className='style-buttons'>
                            <Button startIcon={ <ViewAgenda/>} onClick={() => handleChangeViewStyle('Card')} className={`${viewStyle === 'Card' && 'button-style-active'}`}/>
                            <Button startIcon={ <ViewHeadline/>} onClick={() => handleChangeViewStyle('List')} className={`${viewStyle === 'List' && 'button-style-active'}`}/>
                        </ButtonGroup>
                    </div>
                )
            }
            <div className='favorite-games-list'>
            {
                !hasFavorites
                ? <Empty/>
                : (
                    <>
                        <Button variant='contained' onClick={handleOpenModal} className='reminder-button'>
                            Remind Me!
                        </Button>
                        {
                            viewStyle === 'Card'
                            ? (
                                favoriteGames.map(game => ( 
                                    <Card key={game.id} className='favorite-game'>
                                        <GameDetail name={game.name} 
                                        id={game.id} 
                                        short_screenshots={game.short_screenshots} 
                                        released={game.released} 
                                        metacritic={game.metacritic} 
                                        genres={game.genres} 
                                        platforms={game.platforms.flatMap(inner => inner.platform)}/> 
                                    </Card> 
                                ))
                            )
                            : (
                                <Grid container spacing={1}>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='favorite-as-list'>
                                        {
                                            favoriteGames.map(game => (
                                                <ListItem key={game.id} className='favorite-game'>
                                                    <GameDetail 
                                                    name={game.name} 
                                                    id={game.id} 
                                                    short_screenshots={game.short_screenshots} 
                                                    released={game.released} 
                                                    metacritic={game.metacritic} 
                                                    genres={game.genres} 
                                                    platforms={game.platforms.flatMap(inner => inner.platform)}/>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Grid>
                            )  
                        }
                        <ModalPortal isOpen={modal} onClose={handleCloseModal}>
                            <RemindMe/>
                        </ModalPortal>
                    </>
                )
            }
            </div>
        </div>
    )
}

export default FavoritesGames
