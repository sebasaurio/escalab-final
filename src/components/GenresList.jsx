import React from 'react'

const GenresList = ({genres}) => {
    return (
        <div>
            {
                genres.map(genre => (
                    <span key={genre.id}>{genre.name}</span>
                ))
            }
        </div>
    )
}

export default GenresList
