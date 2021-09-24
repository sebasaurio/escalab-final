import React from 'react'
import PropTypes from 'prop-types'

import {Chip} from '@material-ui/core'

import '../assets/styles/platformList.css'

const PlatformList = ({platforms}) => {
    return (
        <div className='platform-list'>
            {
                platforms && platforms.map((platform, index) => (
                    <Chip className='platform-item' key={index} label={platform.platform.name}/>
                ))
            }
        </div>
    )
}

PlatformList.propTypes = {
    platforms: PropTypes.array.isRequired
}

export default PlatformList
