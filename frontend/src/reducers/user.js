import { USER_IS_LOADING, USER_IS_LOADED, USER_ERROR, USER_LOGOUT } from "../actions/types";

const intialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  error: ""
};

export default function(state = intialState, action) {
  switch (action.type) {
    case USER_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_IS_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: JSON.stringify(action.payload)
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoading:false,
        isAuthenticated:false,
        user:{},
        error:""
      }
    default:
      return state;
  }
}
