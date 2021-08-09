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
        case 'COMEDY':
            return {
                ...state,
                headline: state.comedy
            }
        case 'ANIME':
            return {
                ...state,
                headline: state.anime
            }
        case 'RESET':
            return {
                ...state,
                headline: ''
            }
        default:
            return state
    }
}

export default genre