const genreState = {
    action:'Action',
    romance:'Romance',
    comedy:'Comedy',
    anime:'Anime',
    headline:'',
}


const genre = (state = genreState, action) => {
    switch(action.type) {
        case 'ACTION':
            return {
                ...state,
                headline: state.action
            }
        case 'ROMANCE':
            return {
                ...state,
                headline: state.romance
            }
        case 'THRILLER':
            return {
                ...state,
                headline: state.comey
            }
        case 'COMEDY':
            return {
                ...state,
                headline: state.anime
            }

        default:
            return state
    }
}

export default genre