import React, {lazy, Suspense} from 'react'

import {GET_PLATFORMS_LIST} from 'constant/index'
import {useApiCall} from 'customHooks/useApiCall'
import Loading from './Loading'
import 'assets/styles/layout.css'

const Menu = lazy(() => import('./Menu'))

const Layout = ({children}) => {
    
     const {response} = useApiCall({
        method: 'GET',
        url: GET_PLATFORMS_LIST
    })

    return (
        <div className='layout'>
            <Suspense fallback={<Loading/>}>
                <Menu parentPlatforms={response?.results}/>
                {children}
            </Suspense>
        </div>
    )
}

export default Layout
