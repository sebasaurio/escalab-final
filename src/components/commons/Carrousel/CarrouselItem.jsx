import React from 'react'

import {Paper} from '@material-ui/core'

const CarrouselItem = ({item}) => {
    return (
        <Paper>
            <img src={item.image} alt="from game" width='240px' height='200px'/>
        </Paper>
    )
}

export default CarrouselItem
