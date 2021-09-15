import React from 'react'
import {Chip} from '@material-ui/core'

const PlatformList = ({platforms}) => {
    return (
        <>
            {
                platforms && platforms.map((platform, index) => (
                    <Chip key={index} label={platform.platform.name}/>
                ))
            }
        </>
    )
}

export default PlatformList
