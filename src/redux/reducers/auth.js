import * as actions from '../actions/auth';

const initialState = { authenticated: false, token: null, loggingIn: false, error: null }

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return Object.assign({}, state, { loggingIn: true });

    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, { loggingIn: false, token: action.token, authenticated: true, error: null });

    case actions.LOGIN_FAILURE:
      return Object.assign({}, state, { loggingIn: false, token: null, authenticated: false, error: 'Login Error' });

    case actions.LOGOUT:
      return Object.assign({}, state, { token: null, authenticated: false, error: null });

    default:
      return state;
  }
}