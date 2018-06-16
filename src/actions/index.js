import axios from 'axios';
const root_url = "http://localhost:8080";

//import LOCALSTORAGE !!!

//all caps means is something used for code not in business model (a type)
//differentiate naming convention to show that its a type
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const SAVE_SEARCH_LOCATION = "SAVE_SEARCH_LOCATION";
export const DISPLAY_MAP_MARKER = "DISPLAY_MAP_MARKER";
export const GET_PLACE_DETAILS = "GET_PLACE_DETAILS"

export const POST_REVIEW = "POST_REVIEW";
export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";





// A U T H O R I Z A T I O N

export const registerUser = (user) => {
  const request = axios.post(`${root_url}/user/register`, user)
  return{
    type: REGISTER,
    payload: request
  }
}

export const loginUser = (user) => {
  const request = axios.post(`${root_url}/user/login`, user)
  return{
    type: LOGIN,
    payload: request
  }
}

export const logoutUser = () => ({
  type: LOGOUT
});



// R E V I E W S

export const postReview = (review) =>{
  const request = axios.post(`${root_url}/review/new/` + localStorage.getItem('token'), review)
  return{
    type: POST_REVIEW,
    payload: request
  }
}


export const fetchAllReviews = () => {
  return axios.get(`${root_url}/review/allreviews`)
  .then(request => {
    return {
      type: FETCH_ALL_REVIEWS,
      payload: request
      }
    }
  )
}



// L O C A T I O N
//pass entire address
export const saveCurrentLocation = (address) => {
  debugger
  return{
    type: SAVE_SEARCH_LOCATION,
    payload: address
  }
}

export const displayLocationMarker = (coords) => {
  return{
    type: DISPLAY_MAP_MARKER,
    payload: coords
  }
}

export const getPlaceDetails = (placeid) =>{
  return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=AIzaSyA6ECb06GHjgfRQjrOJKy6tQqScBimbFmA`)
  .then(request => {
    return {
      type: GET_PLACE_DETAILS,
      payload: request
      }
    }
  )
}
