import React, {useEffect, useState} from 'react'
import {Chip} from '@material-ui/core'

import PlatformsGames from 'components/PlatformsGames'
import PlatformList from 'components/PlatformList'

import { useGetPlatforms } from 'customHooks/useGetPlatforms'

const GamesInPlatform = () => {

    const {platforms, getPlatforms} = useGetPlatforms()

    const handleSetPlatform = (id) => {
        console.log(id)
    }

    useEffect(()=>{
        getPlatforms()
        console.log(platforms)
    },[])

    return (
        <div>
           {/* <PlatformList platforms={platforms.results} handleOnClick={handleSetPlatform}/> */}
        </div>
    )
}

export default GamesInPlatform
