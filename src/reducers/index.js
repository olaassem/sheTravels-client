import {combineReducers} from 'redux';
import reviewsReducer from './review-reducer';
import locationReducer from './location-reducer';
import userReducer from './user-reducer';


const rootReducer = combineReducers({
  reviews: reviewsReducer,
  location: locationReducer,
  users: userReducer
})

export default rootReducer;
