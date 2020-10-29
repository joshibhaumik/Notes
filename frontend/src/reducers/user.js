import { USER_IS_LOADED, USER_LOGOUT } from "../actions/types";

const intialState = {
  token: window.localStorage.getItem("token"),
  isAuthenticated: false,
  user: {},
};

export default function(state = intialState, action) {
  switch (action.type) {
    case USER_IS_LOADED:
      window.localStorage.setItem("token",action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case USER_LOGOUT:
      window.localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated:false,
        user:{},
        token: undefined
      }
    default:
      return state;
  }
}
