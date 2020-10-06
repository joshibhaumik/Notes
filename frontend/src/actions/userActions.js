import axios from "axios";
import {
  USER_ERROR,
  USER_IS_LOADED,
  USER_IS_LOADING,
  USER_LOGOUT
} from "./types";

export const loginUser = cred => async dispatch => {
  try {
    dispatch({ type: USER_IS_LOADING });
    const response = await axios.post("/auth/login", cred);
    dispatch({
      type: USER_IS_LOADED,
      payload: response.data
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
    const response = await axios.get("/auth/logout");
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
