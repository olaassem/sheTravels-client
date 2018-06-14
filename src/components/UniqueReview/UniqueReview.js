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
                  <p className="uniqueReviewSubmitted">Reviewed <Moment fromNow>{reviewDateToFormat}</Moment></p>

                  <p className="uniqueReviewUsername">"Username"</p>
                  <p className="uniqueReviewGroupAge">"Age"</p>
                  <p className="uniqueReviewCountry">"Country"</p>

                  <img className="uniqueReviewImg" src="https://pbs.twimg.com/profile_images/732691498186182656/12xE95y__400x400.jpg" alt="location image"/>


                      <div className="location-box">
                        <p className="uniqueReviewLocation">"Searched location"</p>
                      </div>

                      <div className="address-box">
                        <p className="uniqueReviewAddress">"Formatted address"</p>
                      </div>


                      <p className="uniqueReviewVisit"><img className="calendarIcon"  src={Calendar} alt="calendar icon"/> <Moment format="MMMM YYYY">{visitDateToFormat}</Moment> <span className="for">for</span> <img className="durationIcon" src={Duration} alt="sand clock icon"/> {review.duration}</p>







<div>
                  <div className="row">
                    <div className="col-3">
                      <div className="features-box">
                      <p className="uniqueReviewRating"><img className="stars" src={rating} alt=""/> {review.rating}</p>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="features-box">
                        <p className="uniqueReviewRating"><img className="safetyIcon" src={Safety} alt="safety pin icon"/> {review.safety}</p>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="features-box">
                        <p className="uniqueReviewVisit"><img className="walletIcon" src={Wallet} alt="wallet icon"/> {review.affordability}</p>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="features-box">
                        <p className="uniqueReviewRating"><img className="hangerIcon" src={Hanger} alt="hanger icon"/> {review.dress}</p>
                      </div>
                    </div>
                  </div>
                </div>  

                  <div className="row">
                    <div className="col-12">
                    <p className="uniqueReviewTitle"><img className="summaryIcon" src={Summary} alt="chat bubble icon"/> {review.title}</p>
                    <div className="rating-box">
                      <p className="uniqueReviewRating">{review.summary}</p>
                    </div>
                    </div>
                  </div>
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
