import {useEffect, useState} from 'react'
import axios from 'axios'

import {BASE_URL} from 'constant/index'

axios.defaults.baseURL = BASE_URL

export const useApiCall = (axiosParams) => {
    const [response, setResponse]  = useState(undefined)
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params) =>{
        try {
            const result = await axios.request(params)
            setResponse(result?.data)
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(axiosParams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return {response, error, loading}
}

export const useApiCallExtensible = () => {
    const [response, setResponse]  = useState(undefined)
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params) =>{
        try {
            const result = await axios.request(params)
            setResponse(result?.data)
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    return {response, error, loading, fetchData}
}