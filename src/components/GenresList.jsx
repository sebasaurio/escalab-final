import React from 'react'
import PropTypes from 'prop-types'

import {Chip} from '@material-ui/core'

import '../assets/styles/genreList.css'

const GenresList = ({genres}) => {
    return (
        <div className='genre-list'>
            {
                genres && genres.map(genre => (
                    <Chip className='genre-item' key={genre.id} label={genre.name} m={3}/>
                ))
            }
        </div>
    )
}

GenresList.propTypes = {
    genres: PropTypes.array.isRequired
}

export default GenresList
