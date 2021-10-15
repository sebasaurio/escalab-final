import React from 'react'
import PropTypes from 'prop-types'

import {Chip} from '@material-ui/core'

import '../../assets/styles/platformList.css'

const PlatformList = ({platforms, handleOnClick, platformActive}) => (
    <div className='platform-list'>
        {
            platforms && platforms.map((platform) => (
                <Chip 
                    className={`platform-item ${platformActive === platform.id && 'platform-active'}`} 
                    key={platform.id} 
                    label={platform.name} 
                    size="small" 
                    onClick={() => handleOnClick && handleOnClick(platform.id)}
                    />
            ))
        }
    </div>
)


PlatformList.propTypes = {
    platforms: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func,
    platformActive: PropTypes.any
}

export default PlatformList
