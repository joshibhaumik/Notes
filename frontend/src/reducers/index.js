import { combineReducers } from 'redux';
import note from './note';
import user from './user';
import error from './error';

export default combineReducers({
    note,
    user,
    error
});