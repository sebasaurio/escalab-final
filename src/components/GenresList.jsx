import React from 'react'
import PropTypes from 'prop-types'

import {Chip} from '@material-ui/core'

const GenresList = ({genres}) => {
    return (
        <div>
            {
                genres && genres.map(genre => (
                    <Chip key={genre.id} label={genre.name} m={3}/>
                ))
            }
        </div>
    )
}

GenresList.propTypes = {
    genres: PropTypes.array.isRequired
}

export default GenresList
