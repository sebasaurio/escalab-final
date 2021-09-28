import React from 'react'

import PlatformsGames from 'components/PlatformsGames'
import PlatformList from 'components/PlatformList'

import { useApiCall } from '../customHooks/useApiCall'
import {GET_PLATFORMS_LIST} from '../constant/index'


const GamesInPlatform = () => {

    const {response, error, loading} = useApiCall({
        method: 'GET',
        url: GET_PLATFORMS_LIST
    })

    console.log(response)
    return (
        <div>
            aca voy mostrar jueguitos por plataformas, arriba una lista ordenada de las plataformas y si presiono una de ellas cargo juegos d
            
        </div>
    )
}

export default GamesInPlatform
