const initialState = {
  userData: [],
  userDetails: {},
  updateUser: {},
  userId: '',
  updatePhoto: {},
  loading: false,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        userData: action.data,
        loading: false,
      };
    case 'GET_USER_DETAILS':
      return {
        ...state,
        userId: action.userId,
        loading: true,
      };
    case 'GET_USER_DETAILS_SUCCESS':
      return {
        ...state,
        userDetails: action.dataUserDetails,
        loading: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        userId: action.userId,
        loading: true,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        updateUser: action.dataUpdateUser,
        loading: false,
      };
    case 'UPDATE_PHOTO':
      return {
        ...state,
        userId: action.userId,
        loading: true,
      };
    case 'UPDATE_PHOTO_SUCCESS':
      return {
        ...state,
        updatePhoto: action.dataUpdatePhoto,
        loading: false,
      };
    default:
      return state;
  }
};

export default User;
