import React from 'react'

const PlatformList = ({platforms}) => {
    return (
        <div>
            <ul>
            {
                platforms.map((platform, index) => (
                    <li key={index}>{platform.platform.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default PlatformList
