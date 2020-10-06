import axios from "axios";
import {
  USER_ERROR,
  USER_IS_LOADED,
  USER_IS_LOADING,
  USER_LOGOUT
} from "./types";

export const signupUser = userData => async dispatch => {
  try {
    dispatch({ type: USER_IS_LOADING });
    const res = await axios.post("/auth/signup/", userData);
    window.localStorage.setItem("authtoken", res.data.token);
    dispatch({
      type: USER_IS_LOADED,
      payload: res.data.user
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error
    });
    console.error(error);
  }
};

export const loginUser = cred => async dispatch => {
  try {
    dispatch({ type: USER_IS_LOADING });
    const response = await axios.post("/auth/login/", cred);
    window.localStorage.setItem("authtoken", response.data.token);
    dispatch({
      type: USER_IS_LOADED,
      payload: response.data.user
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error
    });
    console.error(error);
  }
};

export const logoutUser = () => async dispatch => {
  try {
    dispatch({ type: USER_IS_LOADING });
    const response = await axios.post("/auth/logout");
    dispatch({
      type: USER_LOGOUT
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error
    });
    console.error(error);
  }
};
