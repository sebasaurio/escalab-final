import React from 'react'
import {Backdrop} from '@material-ui/core'
import {format, startOfMonth, endOfMonth} from 'date-fns'

import {HIGHEST_GAMES} from 'constant/index'
import {useApiCall} from 'customHooks/useApiCall'

import HighlightGame from './HighlightGame'
import ErrorBoundary from 'hoc/ErrorBoundary'

const HighlightsGames = () => {

    const actualDate = new Date()
    const startOfActualMonth = startOfMonth(actualDate)
    const endOfActualMonth = endOfMonth(actualDate)

    const {response, loading} = useApiCall({
          method: 'GET',
          url: HIGHEST_GAMES(format(startOfActualMonth, "yyyy-MM-dd"), format(endOfActualMonth, "yyyy-MM-dd"), '+rating'),
    })
    return (
        <div>
            {
                loading 
                ? <Backdrop className='backdrop' open={true} sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}/>
                : 
                    <ErrorBoundary>
                        {
                            response?.results.map(game => (
                                <HighlightGame game={game} key={game.id}/>
                            ))
                        }
                    </ErrorBoundary>
            }
        </div>
    )
}

export default HighlightsGames
