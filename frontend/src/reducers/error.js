import {
    IS_LOADED,
    IS_LOADING
} from "../actions/types";

const init = {
    isLoading: false
}

export default function (state=init, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case IS_LOADED:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}