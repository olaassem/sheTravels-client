// import {
//   REGISTER,
//   registerUser,
//   LOGIN,
//   loginUser,
//   LOGOUT,
//   logoutUser,
//   SAVE_SEARCH_LOCATION,
//   saveCurrentLocation,
//   DISPLAY_MAP_MARKER,
//   displayLocationMarker,
//   GET_PLACE_DETAILS,
//   getPlaceDetails,
//   POST_REVIEW,
//   postReview,
//   FETCH_ALL_REVIEWS,
//   fetchAllReviews,
//   FETCH_USER_REVIEWS,
//   fetchUserReviews,
//   DELETE_USER_REVIEW,
//   deleteUserReview
// } from './index';
//
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
//
// localStorage.setItem('token', 'immaToken');
// localStorage.setItem('userId', 'immaUserid');
//
//
// //Authorization Tests
//
// describe('loginUser', () => {
//   it('Should return the action', () => {
//     const loginData = {
//       username: 'username',
//       password: '1234567890'
//     };
//
//     const postRequest = mock.reply(200, loginData);
//     const action = loginUser(loginData);
//     expect(action.type).toEqual(LOGIN);
//     Promise.resolve(action.payload).then((value) => {
//       expect(value.data.userName).toEqual('username');
//       expect(value.status).toEqual(200);
//     });
//   });
// });
//
//
// describe('registerUser', () => {
//   it('Should return the action', () => {
//     const registerData = {
//       name,
//       username,
//       password: '1234567890',
//       age,
//       country
//   }
//     const postRequest = mock.reply(200, registerData);
//
//     const action = registerUser(registerData);
//
//     expect(action.type).toEqual(REGISTER);
//     Promise.resolve(action.payload).then((value) => {
//       expect(value.data.username).toEqual('username');
//       expect(value.status).toEqual(200);
//     });
//   });
// });
//
//
// describe('logoutUser', () => {
//   it('Should return the action', () => {
//     const action = logoutUser();
//     expect(action.type).toEqual(LOGOUT);
//   });
// });
//
//
//
// //Reviews Tests
//
// describe('postReview', () => {
//   it('Should return the action', () => {
//     const newReviewData = 'New Review';
//     const action = postReview(newReviewData);
//     expect(action.type).toEqual(POST_REVIEW);
//   });
// });
//
// describe('fetchAllReviews', () => {
//   it('Should return the action', () => {
//     const action = fetchAllReviews();
//     expect(action.type).toEqual(FETCH_ALL_REVIEWS);
//   });
// });
//
// describe('fetchUserReviews', () => {
//   it('Should return the action', () => {
//     const action = fetchUserReviews();
//     expect(action.type).toEqual(FETCH_USER_REVIEWS);
//   });
// });
//
// describe('deleteUserReview', () => {
//   it('Should return the action', () => {
//     const action = deleteUserReview();
//     expect(action.type).toEqual(DELETE_USER_REVIEW);
//   });
// });
//
//
// //Location Tests
//
// describe('saveCurrentLocation', () => {
//   it('Should return the action', () => {
//     const addressData = 'address';
//     const action = saveCurrentLocation(addressData);
//     expect(action.type).toEqual(SAVE_SEARCH_LOCATION);
//   });
// });
//
// describe('displayLocationMarker', () => {
//   it('Should return the action', () => {
//     const coordsData = 'coords';
//     const action = displayLocationMarker(coordsData);
//     expect(action.type).toEqual(DISPLAY_MAP_MARKER);
//   });
// });
//
// describe('getPlaceDetails', () => {
//   it('Should return the action', () => {
//     const action = getPlaceDetails();
//     expect(action.type).toEqual(GET_PLACE_DETAILS);
//   });
// });
