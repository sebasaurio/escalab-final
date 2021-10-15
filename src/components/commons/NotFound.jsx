import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Button} from '@material-ui/core'

import notFound from '../../assets/static/images/notfoundfake.jpg'
import '../../assets/styles/notFound.css'

const NotFound = () => (
    <div className='not-found-container'>
        <img src={notFound} alt="page not found" className='not-found-image'/>
        <Typography variant="h4" gutterBottom>
            Page not found
        </Typography>
    
        <Button variant='contained' component={Link} to={'/'}>
            Go Home
        </Button>
        
    </div>
)

export default NotFound
