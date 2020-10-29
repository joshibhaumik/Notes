import {
    NAME_CHANGE,
    COLOR_CHANGE,
    PEN_COLOR,
    SET_PEN_SIZE,
    ADD_POINTS
} from '../actions/types';

const initialState = {
    name:'',
    color1: {
        r:'255',
        g:'255',
        b:'255',
        a:'1'
    },
    color2:{
        r:'0',
        g:'70',
        b:'222',
        a:'1'
    },
    color3:{
        r:'18',
        g:'222',
        b:'0',
        a:'1'
    },
    color4: {
        r:'222',
        g:'18',
        b:'0',
        a:'1'
    },
    penColor: {
        r:'255',
        g:'255',
        b:'255',
        a:'1'
    },
    size: 7,
    width:window.innerWidth,
    height:window.innerHeight - 5.001,
    points: ""
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NAME_CHANGE:
            return {
                ...state,
                name:action.payload
            };
        case COLOR_CHANGE:
            return {
                ...state,
                [action.color]: action.payload
            };
        case PEN_COLOR:
            return {
                ...state,
                penColor: action.payload
            }
        case SET_PEN_SIZE:
            return {
                ...state,
                size: action.payload
            }
        case ADD_POINTS:
            return {
                ...state,
                points: state.points + action.payload
            }
        default:
            return state
    }
}