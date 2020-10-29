import axios from "axios";
import {
  USER_IS_LOADED,
  USER_LOGOUT,
  IS_LOADING,
  IS_LOADED
} from "./types";

export const signupUser = userData => async dispatch => {
  try {
    dispatch({ type: IS_LOADING });
    const res = await axios.post("/auth/signup/", userData);
    window.localStorage.setItem("authtoken", res.data.token);
    dispatch({
      type: USER_IS_LOADED,
      payload: res.data
    });
    dispatch({type: IS_LOADED});
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = cred => async dispatch => {
  try {
    dispatch({ type: IS_LOADING });
    const response = await axios.post("/auth/login/", cred);
    window.localStorage.setItem("authtoken", response.data.token);
    dispatch({
      type: USER_IS_LOADED,
      payload: response.data
    });
    dispatch({type: IS_LOADED});
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = () => async dispatch => {
  try {
    dispatch({ type: IS_LOADING });
    await axios.post("/auth/logout");
    dispatch({type: USER_LOGOUT});
    dispatch({type: IS_LOADED});
  } catch (error) {
    console.error(error);
  }
};
