import {createStore, applyMiddleware} from 'redux';

//get all reducers
//{} for functions and class
import rootReducer from '../reducers/index';
import promise from 'redux-promise';

const middlewares = [promise];


export default createStore(rootReducer, (applyMiddleware(...middlewares)))
