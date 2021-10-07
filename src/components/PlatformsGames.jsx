import React from 'react'
import {useSelector} from 'react-redux'

import {Card} from '@material-ui/core'

import GameDetail from './GameDescription'
import 'assets/styles/favoriteGames.css'

const PlatformsGames = () => {
    const games = useSelector((state) => state.games)

    return (
        <div>
           {
               games.map(game => (
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
           }
        </div>
    )
}

export default PlatformsGames
