export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_SECTION':
            return {
                ...state,
                sectionActive: action.payload
            }
        case 'CLEAR_SECTION':
            return {
                ...state,
                sectionActive: ''
            }
        case 'SET_PLATFORM':
            return {
                ...state,
                platformActive: action.payload
            }
        case 'SET_FAVORITE':
            return {
                ...state,
                favoriteGames: [...state.favoriteGames, action.payload]
            }
        case 'CLEAR_FAVORITES':
            return{
                ...state,
                favoriteGames: [],
            }
        case 'DELETE_FAVORITE':
            return{
                ...state,
                favoriteGames: state.favoriteGames.filter(games => games.id !== action.payload)
            }
        default:
            return state
    }
}

