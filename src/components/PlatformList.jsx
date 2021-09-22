import React from 'react'
import PropTypes from 'prop-types'

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

PlatformList.propTypes = {
    platforms: PropTypes.array.isRequired
}

export default PlatformList
