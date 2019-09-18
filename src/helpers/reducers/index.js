import { combineReducers } from 'redux';
import apodReducer from './apodReducer';
import neoReducer from './neoReducer';

export default combineReducers({
    apodReducer: apodReducer,
    neoReducer: neoReducer
});