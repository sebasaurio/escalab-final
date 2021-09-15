export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_SECTION':
            return {
                ...state,
                sectionActive: action.payload
            }
        case 'SET_FAVORITE':
            return {
                ...state,
                favoriteGames: [...state.favoriteGames, action.payload]
            }
        default:
            return state
    }
}

