 export const setSection = (payload) => ({
    type: 'SET_SECTION',
    payload
 })

 export const setPlatform = (payload) => ({
     type: 'SET_PLATFORM',
     payload
 })

 export const setFavorite = (payload) => ({
     type: 'SET_FAVORITE',
     payload
 })

 export const clearFavorites = (payload) =>({
     type: 'CLEAR_FAVORITES',
     payload
 })

 export const deleteFavorite = (payload) => ({
     type: 'DELETE_FAVORITE',
     payload
 })