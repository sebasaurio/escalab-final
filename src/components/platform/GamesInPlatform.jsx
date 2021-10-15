import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setGames, setPlatform} from '../../actions/index'

import PlatformsGames from './PlatformsGames'
import PlatformList from './PlatformList'

import { useGetPlatforms } from '../../customHooks/useGetPlatforms'
import { FILTER_PLATFORMS_NAMES, GET_GAMES_BY_PLATFORM_ID} from '../../constant/index'
import axios from 'axios'

import Loading from '../commons/Loading'

const GamesInPlatform = () => {
    const [loading, setLoading] = useState(true)

    const {platforms, getPlatforms} = useGetPlatforms()
    const [platformId, setPlatformId] = useState(undefined)

    const platformActive = useSelector((state) => state.platformActive)

    const dispatch = useDispatch()

    const handleSetPlatform = (id) => {
        setPlatformId(id)
        dispatch(setPlatform(id))
    }

    const getGames = async (id) => {
        setLoading(true)
        try{
            const result = await axios.get(GET_GAMES_BY_PLATFORM_ID(id))
            dispatch(setGames(result.data.results))
        }catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
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

    useEffect(() => {
        dispatch(setPlatform(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
           {
               <PlatformList
                platforms={platforms.results.find(mainPlatform => FILTER_PLATFORMS_NAMES.includes(mainPlatform.name.toLowerCase())).flatMap(platforms => platforms.platforms)} 
                platformActive={platformActive}
                handleOnClick={handleSetPlatform}
                />
           }

           {
                loading
                ? <Loading/>
                : <PlatformsGames games={platformId}/>
           }
        </div>
    )
}

export default GamesInPlatform
