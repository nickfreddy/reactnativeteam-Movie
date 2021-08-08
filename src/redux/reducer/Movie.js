const initialState =  {
    loading: false,
    loadingMore: false,
    movieId : '',
    movieData : [],
    movieDetails : {},
    pageCount : 0
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
        case 'GET_MOVIE_BY_SEARCH':
            return {
                ...state,
                loading: true,
            }
        case 'GET_MOVIE_BY_SEARCH_SUCCESS':
            return {
                ...state,
                movieData : action.dataSearch,
                loading:false
            }
        case 'LOGOUT':
            return {
                ...state,
                loading: false,
                movieId : '',
                movieData : [],
                movieDetails : {}
            };
        case 'GET_MORE_MOVIE':
            return {
                ...state,
                loadingMore: true,
                pageCount: state.pageCount + 1,
            }
        case 'GET_MORE_MOVIE_SUCCESS':
            return {
                ...state,
                movieData: [...state.movieData, ...action.data],
                loadingMore: false,
            }
        case 'GET_MORE_MOVIE_FAILED':
            return {
                ...state,
                pageCount: state.pageCount - 1,
                loadingMore: false
            }
        default :
            return state
    }
}

export default movie