import { combineReducers } from 'redux';
import note from './note';
import user from './user';

export default combineReducers({
    note,
    user
});