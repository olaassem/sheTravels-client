import {createStore} from 'redux';

//get all reducers
//{} for functions and class
import rootReducer from '../reducers/index';

//create store of root reducer
export default createStore(rootReducer);
