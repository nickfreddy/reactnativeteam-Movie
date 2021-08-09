const initialState = {
  reviewId: '',
  AllRevData: [],
  reviewDetails: {},
  isLoading: false
};

const AllRev = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_REV':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_ALL_REV_SUCCESS':
      return {
        ...state,
        AllRevData: action.data,
        isLoading: false
      };
    case 'GET_REVIEW_DETAILS':
      return {
        ...state,
        reviewId: action.reviewId,
      };
    case 'GET_REVIEW_DETAILS_SUCCESS':
      return {
        ...state,
        reviewDetails: action.dataReviewDetails,
      };
    default:
      return state;
  }
};

export default AllRev;
