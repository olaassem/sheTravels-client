import React from 'react';
import {connect} from 'react-redux';
import {fetchAllReviews} from '../../actions/index';
import Moment from 'react-moment';

import './UniqueReview.css';
import '../../grid.css';

import fiveIcon from "../../assets/5.png";
import fourIcon from "../../assets/4.png";
import threeIcon from "../../assets/3.png";
import twoIcon from "../../assets/2.png";
import oneIcon from "../../assets/1.png";

class UniqueReview extends React.Component{

  componentDidMount(){
    this.props.fetchAllReviews();
  }


  render(){
    let dbReviews = this.props.allReviews;
    console.log(dbReviews);
    if(!dbReviews){
      return(
        <h1>Loading...</h1>
      )
    }else{
        return dbReviews.map((review, index) => {

        const reviewDateToFormat = review.submitted;
        const visitDateToFormat = review.visit;


        let rating;
        let overallRating = review.rating;
        if (overallRating === "Incredible"){
          rating = fiveIcon;
        }if (overallRating === "Good"){
          rating = fourIcon
        }if (overallRating === "Average"){
          rating = threeIcon
        }if (overallRating === "Bad"){
          rating = twoIcon
        }if (overallRating === "Horrible"){
          rating = oneIcon
        } ;

          return(
            <div className="row" key={index}>
              <div className="col-12">
                <div className="uniquereview-container">
                    <p className="uniqueReviewVisit">Reviewed <Moment fromNow>{reviewDateToFormat}</Moment></p>
                    <p className="uniqueReviewTitle">Title: {review.title}</p>
                    <p className="uniqueReviewRating"><img className="stars" src={rating} alt=""/> {review.rating}</p>
                    <p className="uniqueReviewRating">Visited: <Moment format="MMMM YYYY">{visitDateToFormat}</Moment></p>
                    <p className="uniqueReviewRating">Length of Visit: {review.duration}</p>
                    <p className="uniqueReviewRating">Personal Safety & Security: {review.safety}</p>
                    <p className="uniqueReviewVisit">Affordability: {review.affordability}</p>
                    <p className="uniqueReviewRating">Dress: {review.dress}</p>
                    <p className="uniqueReviewRating">Summary: {review.summary}</p>
                </div>
              </div>
            </div>
          )
        });
    };
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
