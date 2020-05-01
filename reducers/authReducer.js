import isEmptyObject from './../utils/isEmptyObject';

export const TYPES = {
  login: 'LOGIN',
  signup: 'SIGN_UP',
  facebook_auth: 'FACEBOOK_AUTH',
  errors: 'GET_ERRORS',
};

export const initialState = {
  isAuthenticated: false,
  user: {},
  message: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FACEBOOK_AUTH':
      return {
        ...state,
        isAuthenticated: !isEmptyObject(action.payload),
        user: action.payload,
        message: 'success',
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: !isEmptyObject(action.payload),
        user: action.payload,
        message: 'success',
      };
    case 'SIGN_UP':
      return {
        ...state,
        isAuthenticated: !isEmptyObject(action.payload),
        user: action.payload,
        message: 'success',
      };
    case 'GET_ERRORS':
      return {
        isAuthenticated: false,
        user: {},
        message: action.payload,
      };
    default:
      return state + 2;
  }
};
