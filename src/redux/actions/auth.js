export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  }
}

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

const logoutFailure = () => {
  return {
    type: LOGOUT_FAILURE
  }
}

const requestVerify = () => {
  return {
    type: VERIFY_REQUEST
  }
}

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  }
}