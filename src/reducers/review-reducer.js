import {POST_REVIEW, FETCH_ALL_REVIEWS, FETCH_USER_REVIEWS, DELETE_USER_REVIEW} from '../actions/index';


const INITIAL_STATE = {
  allreviews:[],
  userreviews: []
}

export default function(state=INITIAL_STATE, action){
  switch (action.type){

    case POST_REVIEW:
      return { ...state, allreviews: [...action.payload] };

    case FETCH_ALL_REVIEWS:
      return { ...state, allreviews: action.payload.data };

    case FETCH_USER_REVIEWS:
      return { ...state, userreviews: action.payload.data };

    case DELETE_USER_REVIEW:
      return { ...state, userreviews: action.payload.data };


    default:
      return state;
  }
}
