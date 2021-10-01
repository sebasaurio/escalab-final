import React from 'react'
import {CircularProgress} from '@material-ui/core'

import 'assets/styles/loading.css'

const Loading = ({text}) => {
    return (
        <div className='loading'>
            <CircularProgress color="inherit" />
            <span className='loading-text'>{}</span>
        </div>
    )
}

export default Loading
