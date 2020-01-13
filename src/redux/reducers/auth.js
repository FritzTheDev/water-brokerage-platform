import * as actions from '../actions/auth';

const initialState = { isAuthenticated: false, token: null, isVerifying: false, loggingIn: false, error: null }

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return Object.assign({}, state, { loggingIn: true });

    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, { loggingIn: false, token: action.token, isAuthenticated: true, error: null });

    case actions.LOGIN_FAILURE:
      return Object.assign({}, state, { loggingIn: false, token: null, isAuthenticated: false, error: 'Login Error' });

    case actions.LOGOUT:
      return Object.assign({}, state, { token: null, isAuthenticated: false, error: null });

    case actions.VERIFY_REQUEST:
      return Object.assign({}, state, { isVerifying: true });

    case actions.VERIFY_SUCCESS:
      return Object.assign({}, state, { isVerifying: false, token: action.token, isAuthenticated: true, error: null });

    case actions.VERIFY_FAILURE:
      return Object.assign({}, state, { isVerifying: false, token: null, isAuthenticated: false, error: null });
      
    default:
      return state;
  }
}