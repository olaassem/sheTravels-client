import React from 'react';
import {connect} from 'react-redux';
import {fetchAllReviews} from '../../actions/index';

import './UniqueReview.css';
import '../../grid.css';


class UniqueReview extends React.Component{

  componentDidMount(){
    this.props.fetchAllReviews();
  }


  render(){
    let dbReviews = this.props.allReviews;
    console.log(dbReviews);
    // if(dbReviews.length > 0){
    //   let reviewItem = dbReviews.map((review, index) => {
    //     return (
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="uniquereview-container" key={index}>
    //               <p className="uniqueReviewVisit">Submitted on: {review.submitted}</p>
    //               <p className="uniqueReviewTitle">Title: {review.title}</p>
    //               <p className="uniqueReviewRating">Overall Experience: {review.rating}</p>
    //               <p className="uniqueReviewRating">Visited: {review.visit}</p>
    //               <p className="uniqueReviewRating">Length of Visit: {review.duration}</p>
    //               <p className="uniqueReviewRating">Personal Safety & Security: {review.safety}</p>
    //               <p className="uniqueReviewVisit">Affordability: {review.affordability}</p>
    //               <p className="uniqueReviewRating">Dress: {review.dress}</p>
    //               <p className="uniqueReviewRating">Summary: {review.summary}</p>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   });
    // };
    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      allReviews: state.reviews.allreviews.data
    }
}


export default connect(mapStateToProps, {fetchAllReviews})(UniqueReview);
