import React from 'react'
import {Grid,CircularProgress} from '@material-ui/core'

import '../../assets/styles/loading.css'

const Loading = () => {
    return (
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className='loading'>
            <CircularProgress color="inherit" />
        </Grid>
    )
}

export default Loading
