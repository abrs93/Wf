import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const enhancers = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhancers);
export default store;