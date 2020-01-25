import products from './product';
import { combineReducers } from 'redux';

const reducers = combineReducers(Object.assign({},products));

export default reducers;