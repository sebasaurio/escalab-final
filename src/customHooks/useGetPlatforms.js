import { useState} from 'react'
import axios from 'axios'

import {BASE_URL} from 'constant/index'
import {GET_PLATFORMS_LIST} from 'constant/index'

import {useLocalStorate} from './useLocalStorage'

axios.defaults.baseURL = BASE_URL

export const useGetPlatforms = () => {
    const [platforms, setPlatforms] = useLocalStorate("platforms", '')
    const [loading, setLoading] = useState(true)

    const getPlatforms = async () => {
        try {
            const result = await axios.get(GET_PLATFORMS_LIST)
            setPlatforms(result?.data)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    return {platforms, loading, getPlatforms}
}