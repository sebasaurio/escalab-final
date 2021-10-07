import React, {useEffect, useState, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setGames} from 'actions/index'

import PlatformsGames from 'components/PlatformsGames'
import PlatformList from 'components/PlatformList'

import { useGetPlatforms } from 'customHooks/useGetPlatforms'
import {FILTER_PLATFORMS_NAMES, GET_GAMES_BY_PLATFORM_ID} from 'constant/index'
import { useApiCall, useApiCallExtensibe } from 'customHooks/useApiCall'
import axios from 'axios'

import Loading from 'components/commons/Loading'

const GamesInPlatform = () => {
    const {platforms, getPlatforms} = useGetPlatforms()
    const [platformId, setPlatformId] = useState(undefined)

    const games = useSelector((state) => state.games)
    const dispatch = useDispatch()

    const handleSetPlatform = (id) => {
        setPlatformId(id)
    }

    const getGames = async (id) => {
        try{
            const result = await axios.get(GET_GAMES_BY_PLATFORM_ID(id))
            console.log(result.data.results)
            dispatch(setGames(result.data.results))
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        getPlatforms()
    },[])

    useEffect(() => {
        getGames(platformId)
    }, [platformId])


    return (
        <div>
           {
               <PlatformList
                platforms={platforms.results.filter(mainPlatform => FILTER_PLATFORMS_NAMES.includes(mainPlatform.name.toLowerCase())).flatMap(platforms => platforms.platforms)} 
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
