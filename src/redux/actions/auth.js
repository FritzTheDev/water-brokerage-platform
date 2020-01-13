import Axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const logout = () => {
  return {
    type: LOGOUT
  };
};

const requestVerification = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verificationSuccess = token => {
  return {
    type: LOGOUT,
    token
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  Axios.post("https://staging-wbp-backend.herokuapp.com/api/v1/token/", {
    email,
    password
  })
    .then(response => {
      const token = response.data.access;
      dispatch(loginSuccess(token));
      localStorage.setItem("token", token);
    })
    .catch(err => {
      dispatch(loginError());
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(logout());
};

export const verifyAuth = () => dispatch => {
  dispatch(requestVerification());
  const token = localStorage.getItem("token");
  console.log(token);
  Axios.get("https://staging-wbp-backend.herokuapp.com/api/v1/listings/", {
    headers: { Authorization: 'Bearer ' + token }
  })
    .then(() => {
      dispatch(verificationSuccess(token));
    })
    // .catch(() => {
    //   localStorage.removeItem("token");
    // });
};
