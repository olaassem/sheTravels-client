import React from 'react';

import './AllReviewsContainer.css';
import '../../grid.css';

import UniqueReview from '../UniqueReview/UniqueReview';


export default class AllReviewsContainer extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-12">
          <div className="allreviews-container">
          <h3>All reviews container placeholder</h3>
          <UniqueReview />
        </div>
        </div>
      </div>
    )
  }
}
