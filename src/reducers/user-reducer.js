import {REGISTER_USER} from '../actions/index'; //import ACTION



//Initial state for the reducer --> initial state for the user
const INITIAL_STATE = {
  registerUser:[] //empty array bc initial state will be nothing. you always have to define. it can be null, etc but needs to be defined!!!
}

//takes two params: state and action
//state is everywhere: on component on reducers
//if the state come w info, that will be the state. if not, or null it will be the initial state.
export default function(state=INITIAL_STATE, action){
  switch (action.type){

    case REGISTER_USER:
    debugger
    //Return the new state.
    //has to be a new state combined with the prior state(s).
    //same as this.setState
      return { ...state, registerUser: action.payload } //will pull prior state

    //in a reducer you always have to return a state or else you get an error!!
    default:
      return state;
  }
}
