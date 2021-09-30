import React from 'react'
import {CircularProgress} from '@material-ui/core'

import '../../assets/styles/loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <CircularProgress color="inherit" />
            <span className='loading-text'>We are loading images</span>
        </div>
    )
}

export default Loading
