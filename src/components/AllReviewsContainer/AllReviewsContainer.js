import React from 'react';

import './AllReviewsContainer.css';
import '../../grid.css';

import UniqueReview from '../UniqueReview/UniqueReview';


export default class AllReviewsContainer extends React.Component{
  render(){
    return(
      <div className="row colorred">
        <div className="col-12">
          <div className="allreviews-container">
          <h2 className="allreviews-header"><span className="appfont">SHE Travelers{"'"} </span>Reviews</h2>
          <UniqueReview />
        </div>
        </div>
      </div>
    )
  }
}
