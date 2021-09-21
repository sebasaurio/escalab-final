import React from 'react'
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

export default GenresList
