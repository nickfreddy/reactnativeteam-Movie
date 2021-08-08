const initialState = {
  userData: [],
  userDetails: {},
  updateUser: {},
  userId: '',
  updatePhoto: {},
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
    case 'UPDATE_USER':
      return {
        ...state,
        userId: action.userId,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        updateUser: action.dataUpdateUser,
      };
    case 'UPDATE_PHOTO':
      return {
        ...state,
        userId: action.userId,
      };
    case 'UPDATE_PHOTO_SUCCESS':
      return {
        ...state,
        updatePhoto: action.dataUpdatePhoto,
      };
    default:
      return state;
  }
};

export default User;
