const initialState =  {
    movieId : '',
    movieData : [],
    movieDetails : {}
}

const movie = (state = initialState, action) => {
    switch(action.type) {
        case "GET_DATA" :
            return state
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                movieData : action.data
            }
        case 'GET_MOVIE_DETAILS': 
            return {
                ...state,
                movieId: action.movieId
            }
        case 'GET_MOVIE_DETAILS_SUCCESS' :
            return {
                ...state,
                movieDetails : action.dataDetails
            }
        default :
            return state
    }
}

export default movie