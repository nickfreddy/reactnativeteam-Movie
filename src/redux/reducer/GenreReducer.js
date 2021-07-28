const genreState = {
    action:'Action',
    romance:'Romance',
    thriller:'Thriller',
    comedy:'comedy',
    headline:'',
}


const genre = (state = genreState, action) => {
    switch(action.type) {
        case 'ACTION':
            return {
                ...state,
                headline: 'Action'
            }
        case 'ROMANCE':
            return {
                ...state,
                headline: 'Romance'
            }
        case 'THRILLER':
            return {
                ...state,
                headline: 'Thriller'
            }
        case 'COMEDY':
            return {
                ...state,
                headline: 'Comedy'
            }

        default:
            return state
    }
}

export default genre