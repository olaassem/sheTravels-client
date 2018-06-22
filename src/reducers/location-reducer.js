import {SAVE_SEARCH_LOCATION, DISPLAY_MAP_MARKER, GET_PLACE_DETAILS} from '../actions/index';


const INITIAL_STATE = {
  currentSearchLocation:[],
  placeDetailsInfo:{}
}

export default function(state=INITIAL_STATE, action){
  switch (action.type){


    case SAVE_SEARCH_LOCATION:
      return { ...state, currentSearchLocation: action.payload }

    case DISPLAY_MAP_MARKER:
      return { ...state, currentSearchLocation: action.payload }

    case GET_PLACE_DETAILS:
      return { ...state, placeDetailsInfo: action.payload.data.result }

    default:
      return state;
  }
}
