import {REGISTER} from '../actions/index';
import {LOGIN} from '../actions/index';
import {LOGOUT} from '../actions/index';




const INITIAL_STATE = {
  auth:{}
}

export default function(state=INITIAL_STATE, action){
  switch (action.type){

    case REGISTER:
    debugger
      return { ...state, auth: action.payload }


    case LOGIN:
    debugger
      return { ...state, auth: action.payload }


    case LOGOUT:
    debugger
      return { ...state, auth: action.payload }


    default:
      return state;
  }
}
