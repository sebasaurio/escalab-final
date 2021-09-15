export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_SECTION':
            return {
                ...state,
                sectionActive: action.payload
            }
        default:
            return state
    }
}

