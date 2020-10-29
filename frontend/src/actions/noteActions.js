import { COLOR_CHANGE, PEN_COLOR, SET_PEN_SIZE, NAME_CHANGE } from "./types";

export const colorChange = (color, number) => dispatch => {
    dispatch({
        type: COLOR_CHANGE,
        color: "color" + number,
        payload: color
    });
}

export const setPenColor = color => dispatch => {
    dispatch({
        type: PEN_COLOR,
        payload: color
    });
}

export const setPenSize = size => dispatch => {
    dispatch({
        type: SET_PEN_SIZE,
        payload: size
    });
}

export const setName = name => dispatch => {
    dispatch({
        type: NAME_CHANGE,
        payload: name
    });
}