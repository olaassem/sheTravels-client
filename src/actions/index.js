import axios from 'axios';
const root_url = "http://localhost:8080";

//all caps means is something used for code not in business model (a type)
//differentiate naming convention to show that its a type
export const REGISTER_USER = "REGISTER_USER";

export const SAVE_SEARCH_LOCATION = "SAVE_SEARCH_LOCATION";

export const POST_REVIEW = "POST_REVIEW";
export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";





// A U T H O R I Z A T I O N

export const registerUser = (user) => {
  const request = axios.post(`${root_url}/user/register`, user)
  return{
    type: REGISTER_USER,
    payload: request
  }
}



// R E V I E W S

export const postReview = (review) =>{
  const request = axios.post(`${root_url}/review/new`, review)
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
export const saveCurrentLocation = (address) =>{
  return{
    type: SAVE_SEARCH_LOCATION,
    payload: address
  }
}
