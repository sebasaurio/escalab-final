import React from 'react'
import {Backdrop, CircularProgress} from '@material-ui/core'

import { HIGHEST_GAMES } from '../constant/index'
import { useApiCall } from '../customHooks/useApiCall'

import HighlightGame from './HighlightGame'

const HighlightsGames = () => {

    const {response, error, loading} = useApiCall({
          method: 'GET',
          url: HIGHEST_GAMES('2021-01-01', '2021-09-13', '+rating'),
    })
    return (
        <div className='highlights-games-list'>
            {
                loading ? 
                    <Backdrop className='backdrop' open={true} sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <CircularProgress color="primary" />
                    </Backdrop>
                : (
                    response?.results.map(game => (
                        <HighlightGame game={game} key={game.id}/>
                    ))
                )
                
            }
        </div>
    )
}

export default HighlightsGames
