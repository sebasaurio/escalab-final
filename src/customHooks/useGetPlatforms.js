import { useState} from 'react'
import axios from 'axios'

import {BASE_URL} from 'constant/index'
import {GET_PLATFORMS_LIST} from 'constant/index'

axios.defaults.baseURL = BASE_URL

export const useGetPlatforms = () => {
    const [response, setResponse] = useState(undefined)
    const [loading, setLoading] = useState(true)

    const getPlatforms = async () => {
        try {
            const result = await axios.get(GET_PLATFORMS_LIST)
            setResponse(result?.data)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    return {response, loading, getPlatforms}
}