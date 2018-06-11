//will have several reducers
//will then export one compiled reducer which is the state

import {combineReducers} from 'redux';
import reviewsReducer from './review-reducer';
import locationReducer from './location-reducer';
import userReducer from './user-reducer';


const rootReducer = combineReducers({
  reviews: reviewsReducer, //"reviews is the key to access the state for eg  xyz.reviews.xyz"
  location: locationReducer,
  users: userReducer
})

//defualt= 1 export
export default rootReducer;
