const initialState =  {
    movieData : []
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
        default :
            return state
    }
}

export default movie