import React from 'react';
import {connect} from 'react-redux';
import {fetchAllReviews} from '../../actions/index';
import Moment from 'react-moment';

import './UniqueReview.css';
import '../../grid.css';

//ratings icons
import fiveIcon from "../../assets/5.png";
import fourIcon from "../../assets/4.png";
import threeIcon from "../../assets/3.png";
import twoIcon from "../../assets/2.png";
import oneIcon from "../../assets/1.png";

//fields icons
import Hanger from '../../assets/hanger.png';
import Wallet from '../../assets/wallet.png';
import Calendar from '../../assets/calendar.png';
import Duration from '../../assets/duration.png';
import Safety from '../../assets/safety.png';
import Rating from '../../assets/rating.png';
import Summary from '../../assets/summary.png';

import Holder from '../../assets/images.jpeg';

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
                <div className="row">
                  <div className="col-12">
                    <p className="uniqueReviewUserCreds">"Username" |  "Age"  | "Country"</p>
                    <p className="uniqueReviewSubmitted">Reviewed <Moment fromNow>{reviewDateToFormat}</Moment></p>
                  </div>
                </div>
            <div className="row">
              <div className="col-12">
                <div className="rating-box">
                  <p className="uniqueReviewRating"><img className="stars" src={rating} alt=""/> {review.rating}</p>
                  <p className="uniqueReviewTitle">{review.title}</p>
                </div>
              </div>
            </div>
            <div className="bgcolor">
              <div className="row">
                <div className="col-4">
                  <div className="reviewimg-box">
                    <img className="uniqueReviewImg" src={Holder} alt="location image"/>
                  </div>
                </div>
                <div className="col-8">
                  <div className="group">
                    <h4 className="uniqueReviewLocation">"Searched location"</h4>
                    <p className="uniqueReviewAddress">"Formatted address"</p>
                    <p className="uniqueReviewVisit"><img className="calendarIconR"  src={Calendar} alt="calendar icon"/> <Moment format="MMMM YYYY">{visitDateToFormat}</Moment> <span className="for">for</span> <img className="durationIconR" src={Duration} alt="sand clock icon"/> {review.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="rating-box">
                  <p className="uniqueReviewSummary"><img className="summaryIconR" src={Summary} alt="chat bubble icon"/>{review.summary}</p>
                </div>
              </div>
            </div>
            <div className="clear">
              <div className="row">
                <div className="col-4">
                  <div className="features-box">
                    <p className="uniqueReviewSafety"><img className="safetyIconR" src={Safety} alt="safety pin icon"/> {review.safety}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="features-box">
                    <p className="uniqueReviewBudget"><img className="walletIconR" src={Wallet} alt="wallet icon"/> {review.affordability}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="features-box">
                    <p className="uniqueReviewDress"><img className="hangerIconR" src={Hanger} alt="hanger icon"/> {review.dress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    });
  };
  }
}

function mapStateToProps(state){
    return {
      allReviews: state.reviews.allreviews.data
    }
}


export default connect(mapStateToProps, {fetchAllReviews})(UniqueReview);
