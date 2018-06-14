import {REGISTER, LOGIN, LOGOUT} from '../actions/index';
import {saveAuthInfo, clearLocalStorage} from '../LocalStorage';



//login: false
const INITIAL_STATE = {
  loginRedirect: false
}

export default function(state=INITIAL_STATE, action){
  //error handler
  if(action.error){
    return state
  }

  switch (action.type){
    //register user and set local storage
    case REGISTER:
    console.log(saveAuthInfo)

    debugger
      return state = {...state, loginRedirect: false};

    //login user and set local storage
    case LOGIN:
    debugger
      saveAuthInfo(
        action.payload.data.data.token,
        action.payload.data.data.userID,
        action.payload.data.data.name,
        action.payload.data.data.country,
        action.payload.data.data.age,
      );
      return state = {...state, loginRedirect: true};

    //clear local storage
    case LOGOUT:
      clearLocalStorage();
      return state = {...state, loginRedirect: false};


    default:
      return state;
  }
}
