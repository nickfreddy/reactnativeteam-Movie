const initialState = {
  userId: '',
  userData: [],
  userDetails: {},
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        userData: action.data,
      };
    case 'GET_USER_DETAILS':
      return {
        ...state,
        userId: action.userId,
      };
    case 'GET_USER_DETAILS_SUCCESS':
      return {
        ...state,
        userDetails: action.dataUserDetails,
      };
    default:
      return state;
  }
};

export default User;
