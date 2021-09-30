import React, {useEffect} from 'react'
import {Chip} from '@material-ui/core'

import PlatformsGames from '../components/PlatformsGames'
import PlatformList from '../components/PlatformList'

import { useGetPlatforms } from '../customHooks/useGetPlatforms'

const GamesInPlatform = () => {

    const {response, loading, getPlatforms} = useGetPlatforms()

    useEffect(()=>{
        getPlatforms()
    },[])

    return (
        <div>
            {
                response?.results.map(platform => (
                    <Chip className='genre-item' key={platform.id} label={platform.name} m={3} size="small"/>
                ))
            }
        </div>
    )
}

export default GamesInPlatform
