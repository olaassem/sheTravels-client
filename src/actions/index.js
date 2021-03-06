import axios from 'axios';
// const root_url = "http://localhost:8080";
const root_url = "https://shetravels.herokuapp.com";


export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const SAVE_SEARCH_LOCATION = "SAVE_SEARCH_LOCATION";
export const DISPLAY_MAP_MARKER = "DISPLAY_MAP_MARKER";
export const GET_PLACE_DETAILS = "GET_PLACE_DETAILS"

export const POST_REVIEW = "POST_REVIEW";
export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const FETCH_USER_REVIEWS = "FETCH_USER_REVIEWS";
export const DELETE_USER_REVIEW = "DELETE_USER_REVIEW";



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
  review.userID = localStorage.getItem('userId');
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

export const fetchUserReviews = () => {
  return axios.get(`${root_url}/review/all/` + localStorage.getItem('token'))
  .then(request => {
    return {
      type: FETCH_USER_REVIEWS,
      payload: request
      }
    }
  )
}

export const deleteUserReview = (reviewID) => {
  return axios.delete(`${root_url}/review/${reviewID}/` + localStorage.getItem('token'))
  .then(request => {
    return {
      type: DELETE_USER_REVIEW,
      payload: request
      }
    }
  )
}


// L O C A T I O N
//pass entire address
export const saveCurrentLocation = (address) => {
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
  return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=AIzaSyAd5YqpjgL__uXevBwgPfrxxYemhoeB2UY`)
  .then(request => {
    return {
      type: GET_PLACE_DETAILS,
      payload: request
      }
    }
  )
}
