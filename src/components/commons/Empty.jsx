import React from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {Typography, Button} from '@material-ui/core'

import emptyImage from 'assets/static/images/empty-crash.png'
import 'assets/styles/empty.css'

//setAction
const Empty = () => {

    const history = useHistory();

    const handleBackHistory = () => history.goBack()

    return (
        <div className='empty'>
            <Typography className='empty-text' variant='h5'>
                Your favorite games will appear here, go ahead and select one
            </Typography>
            <img src={emptyImage} alt='empty' className='empty-img'/>
            <div className='empty-action-buttons'>
                <Button color='primary' variant='outlined' onClick={handleBackHistory} className='button-back'>
                    Go back
                </Button>

                <Button color='primary' variant='contained' component={Link} to='/'>
                    Top games
                </Button>
                
            </div>
        </div>
    )
}

export default Empty
