import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setGames, setPlatform} from 'actions/index'

import PlatformsGames from 'components/PlatformsGames'
import PlatformList from 'components/PlatformList'

import { useGetPlatforms } from 'customHooks/useGetPlatforms'
import { FILTER_PLATFORMS_NAMES, GET_GAMES_BY_PLATFORM_ID} from 'constant/index'
import axios from 'axios'

import Loading from 'components/commons/Loading'

const GamesInPlatform = () => {
    const {platforms, getPlatforms} = useGetPlatforms()
    const [platformId, setPlatformId] = useState(undefined)

    const games = useSelector((state) => state.games)
    const platformActive = useSelector((state) => state.platformActive)
    
    const dispatch = useDispatch()

    const handleSetPlatform = (id) => {
        setPlatformId(id)
        dispatch(setPlatform(id))
    }

    const getGames = async (id) => {
        try{
            const result = await axios.get(GET_GAMES_BY_PLATFORM_ID(id))
            dispatch(setGames(result.data.results))
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        getPlatforms()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        getGames(platformId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [platformId])


    return (
        <div>
           {
               <PlatformList
                platforms={platforms.results.filter(mainPlatform => FILTER_PLATFORMS_NAMES.includes(mainPlatform.name.toLowerCase())).flatMap(platforms => platforms.platforms)} 
                platformActive={platformActive}
                handleOnClick={handleSetPlatform}
                />
           }

           {
               games.length === 0
               ? <Loading/>
               : <PlatformsGames/>
           }
        </div>
    )
}

export default GamesInPlatform
