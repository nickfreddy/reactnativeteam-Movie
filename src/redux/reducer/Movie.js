const initialState =  {
    loading: false,
    movieId : '',
    movieData : [],
    movieDetails : {}
}

const movie = (state = initialState, action) => {
    switch(action.type) {
        case "GET_DATA" :
            return{ 
                ...state,
                loading: true
            }
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                movieData : action.data,
                loading: false
            }
        case 'GET_MOVIE':
            return state
        case 'GET_MOVIE_ID':
            return {
                ...state,
                movieId: action.movieId,
                loading: true,
            }
        case 'GET_MOVIE_DETAILS': 
            return state
        case 'GET_MOVIE_DETAILS_SUCCESS' :
            return {
                ...state,
                movieDetails : action.dataDetails,
                loading: false,
        }
        case 'GET_MOVIE_BY_GENRE':
            return {
                ...state,
                loading: true,
            }
        case 'GET_MOVIE_BY_GENRE_SUCCESS' :
            return {
                ...state,
                movieData : action.dataGenre,
                loading:false
            }
        default :
            return state
    }
}

export default movie