import axios from 'axios';
const root_url = "http://localhost:8080";

//all caps means is something used for code not in business model (a type)
//differentiate naming convention to show that its a type
export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const SAVE_SEARCH_LOCATION = "SAVE_SEARCH_LOCATION";
export const SAVE_NEW_USER_CREDS = "SAVE_NEW_USER_CREDS";



//U S E R
export const registerUser = (user) => {
  // const request = {
  //   name: firstName,
  //   username: userName,
  //   password: password,
  //   country: country,
  //   age: age,
  //   created: date
  // }
  debugger
  return{
    type: SAVE_NEW_USER_CREDS,
    payload: user
  }
}



// R E V I E W S
export const fetchAllReviews = () => {
  //make a request to api
  const request = axios.get(`${root_url}/review/allreviews`)

  //will return type to work w reducers
  return {
    type: FETCH_ALL_REVIEWS,
    payload: request
  }
}



// L O C A T I O N
//pass entire address
export const saveCurrentLocation = (address) =>{
  return{
    type: SAVE_SEARCH_LOCATION,
    payload: address
  }
}
