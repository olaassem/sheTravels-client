import React from 'react';

import './UserReviewsContainer.css';
import '../../grid.css';

import UserReview from '../UserReview/UserReview';


export default class UserReviewsContainer extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-12">
          <div className="userreviews-container">
          <h2 className="userreviews-header">My Reviews</h2>
          <UserReview />
        </div>
        </div>
      </div>
    )
  }
}
