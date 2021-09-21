import React from 'react'
import {Chip} from '@material-ui/core'

const PlatformList = ({platforms}) => {
    return (
        <div>
            {
                platforms && platforms.map((platform, index) => (
                    <Chip key={index} label={platform.platform.name}/>
                ))
            }
        </div>
    )
}

export default PlatformList
