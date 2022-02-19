import { combineReducers } from "redux";
import items from './itemReducer';
import loading from './loadingReducer';

export default combineReducers({
    items,
    loading
});