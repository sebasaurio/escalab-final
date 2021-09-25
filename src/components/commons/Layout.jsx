import React,{useEffect} from 'react'

import {GET_PLATFORMS_LIST} from 'constant/index'
import {useApiCall} from 'customHooks/useApiCall'
import {PLATFORM_DATA} from 'customHooks/temporalData'

import Menu from './Menu'
import 'assets/styles/layout.css'

const Layout = ({children}) => {
    
    // const {response2} = useApiCall({
    //    method: 'GET',
    //    url: GET_PLATFORMS_LIST
    //})

    const response = PLATFORM_DATA
   
    return (
        <div className='layout'>
            <Menu parentPlatforms={response?.results}/>
            {children}
        </div>
    )
}

export default Layout
