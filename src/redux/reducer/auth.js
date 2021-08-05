const initialState = {
  isLoading: false,
  isLoggedIn: false,
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
        isLoading: false,
        isLoggedIn: true,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
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
