import React from 'react'

import {Paper} from '@material-ui/core'

const CarrouselItem = ({item}) => {
    return (
        <Paper>
            <img src={item.image} alt="from game" className='carrousel-image-source'/>
        </Paper>
    )
}

export default CarrouselItem
