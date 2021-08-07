const initalState = {
    movieIdModal: '',
    reviewIdModal: '',
    modalState : false,
    isLoading: false,
    message: ''
}

const review = (state = initalState, action) => {
    switch(action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                modalState : true,
                movieIdModal: action.movieId
            }
        case "OPEN_MODAL_EDIT" :
            return {
                ...state,
                modalState: true,
                movieIdModal: action.data.movieId,
                reviewIdModal: action.data.reviewId
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                modalState : false,
                movieIdModal: ''
            }
        case "POST_COMMENT":
            return{
                ...state,
                isLoading: true
            }
        case "POST_COMMENT_SUCCESS":
            return{
                ...state,
                isLoading: false,
            }
        case "POST_COMMENT_FAILED":
            return{
                ...state,
                isLoading: false,
            }
        case "POST_DELETE" :
            return {
                ...state,
                isLoading: true
            }
        case "POST_DELETE_SUCCESS" :
            return {
                ...state,
                isLoading: false
            }
        case "POST_DELETE_FAILED" :
            return {
                ...state,
                isLoading: false
            }
        case "POST_EDIT" :
            return {
                ...state,
                isLoading: true
            }
        case "POST_EDIT_SUCCESS" :
            return {
                ...state,
                isLoading: false
            }
        case "POST_EDIT_FAILED" :
            return {
                ...state,
                isLoading: false
            }
        default :
            return state
    }
}

export default review