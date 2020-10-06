import * as TYPES from '../actions/types';

const initialState = {
    name:'',
    color1:{
        r:'0',
        g:'0',
        b:'0',
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
    color4:{
        r:'222',
        g:'18',
        b:'0',
        a:'1'
    },
    size: 5,
    width:0,
    height:0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TYPES.NAME_CHANGE:
            return {
                ...state,
                name:action.payload
            };
        case TYPES.COLOR1_CHANGE:
            return {
                ...state,
                COLOR1_CHANGE: action.payload
            };
        case TYPES.COLOR2_CHANGE:
            return {
                ...state,
                COLOR2_CHANGE: action.payload
            };
        case TYPES.COLOR3_CHANGE:
            return {
                ...state,
                COLOR3_CHANGE: action.payload
            };
        case TYPES.COLOR4_CHANGE:
            return {
                ...state,
                COLOR4_CHANGE: action.payload
            };
        default:
            return state
    }
}