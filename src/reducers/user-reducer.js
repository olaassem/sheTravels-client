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

    let {token, userID, name, country, age} = action.payload.data.data;

      saveAuthInfo(
        token,
        userID,
        name,
        country,
        age
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
