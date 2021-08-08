const initialState = {
  isLoading: false,
  isLoggedIn: false,
  loginMessage : null,
  registerMessage: null,
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
        loginMessage: null,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loginMessage: action.message,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false
      }
    case 'LOGOUT_FAILED' :
      return {
        ...state,
        isLoading: false
      }
    case 'VERIFY_TOKEN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'REGISTER':
      return {
        ...state,
        isLoading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registerMessage: null,
        isLoading: false,
        isLoggedIn: true,
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        registerMessage: action.message,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default auth;
