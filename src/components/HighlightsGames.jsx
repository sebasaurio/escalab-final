import React from 'react'

import {HIGHEST_GAMES} from '../constant/index'
import {useApiCall} from '../customHooks/useApiCall'

const HighlightsGames = () => {

    // const {response} = useApiCall({
    //     method: 'GET',
    //     url: HIGHEST_GAMES('2021-01-01', '2021-09-13', '+rating'),
    // })
    return (
        <div className='highlights-games-list'>
            {
                // response.data.results.map(game => (
                //     <div key={game.id}>{game.name}</div>
                // ))
            }
        </div>
    )
}

export default HighlightsGames
