const initialState = {
  isLoading: false,
  isLoggedIn: false,
  message : null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        message: null,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        message: action.message,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'VERIFY_TOKEN':
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default auth;
