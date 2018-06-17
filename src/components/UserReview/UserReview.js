import React from 'react';
import {connect} from 'react-redux';
// import {fetchUserReviews} from '../../actions/index';
import Moment from 'react-moment';

import './UserReview.css';
import '../../grid.css';





export default class UserReview extends React.Component{
  render(){
    return(
      <div></div>
    )
  }
}




// //ratings icons
// import fiveIcon from "../../assets/5.png";
// import fourIcon from "../../assets/4.png";
// import threeIcon from "../../assets/3.png";
// import twoIcon from "../../assets/2.png";
// import oneIcon from "../../assets/1.png";
//
// //fields icons
// import Hanger from '../../assets/hanger.png';
// import Wallet from '../../assets/wallet.png';
// import Calendar from '../../assets/calendar.png';
// import Duration from '../../assets/duration.png';
// import Safety from '../../assets/safety.png';
// import Summary from '../../assets/summary.png';
//
// import Holder from '../../assets/images.jpeg';
//
// class UserReview extends React.Component{
//
//   componentDidMount(){
//     this.props.fetchUserReviews();
//   }
//
//
//   render(){
//     let dbReviews = this.props.allReviews;
//     console.log(dbReviews);
//     if(!dbReviews){
//       return(
//         <h1>Loading...</h1>
//       )
//     }else{
//         return dbReviews.map((review, index) => {
//
//         const reviewDateToFormat = review.submitted;
//         const visitDateToFormat = review.visit;
//
//
//         let rating;
//         let overallRating = review.rating;
//         if (overallRating === "Incredible"){
//           rating = fiveIcon;
//         }if (overallRating === "Good"){
//           rating = fourIcon
//         }if (overallRating === "Average"){
//           rating = threeIcon
//         }if (overallRating === "Bad"){
//           rating = twoIcon
//         }if (overallRating === "Horrible"){
//           rating = oneIcon
//         } ;
//
//           return(
//             <div className="row" key={index}>
//               <div className="col-12">
//                 <div className="uniquereview-container">
//                 <div className="row">
//                   <div className="col-6">
//                     <div className="userInfo">
//                       <p className="uniqueReviewUser">"Username"</p>
//                       <p className="uniqueReviewUserCreds"> "Age"  <span className="red">|</span> "Country"</p>
//                       <p className="uniqueReviewSubmitted">Reviewed <Moment fromNow>{reviewDateToFormat}</Moment></p>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="rating-box">
//                       <p className="uniqueReviewRating"><img className="stars" src={rating} alt=""/> {review.rating}</p>
//                       <p className="uniqueReviewTitle">{review.title}</p>
//                     </div>
//                   </div>
//                 </div>
//             <div className="bgcolor">
//               <div className="row">
//                 <div className="col-4">
//                   <div className="reviewimg-box">
//                     <img className="uniqueReviewImg" src={Holder} alt="location"/>
//                   </div>
//                 </div>
//                 <div className="col-8">
//                   <div className="group">
//                     <h4 className="uniqueReviewLocation">"Searched location:" {review.address}</h4>
//                     <p className="uniqueReviewAddress">"Formatted address:" {review.formattedAddress}</p>
//                     <p className="uniqueReviewVisit"><img className="calendarIconR"  src={Calendar} alt="calendar icon"/> <Moment format="MMMM YYYY">{visitDateToFormat}</Moment>  &nbsp;&nbsp;&nbsp;&nbsp;  <img className="durationIconR" src={Duration} alt="sand clock icon"/> {review.duration}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-12">
//                 <div className="summary">
//                   <p className="uniqueReviewSummary"><img className="summaryIconR" src={Summary} alt="chat bubble icon"/> &nbsp; {review.summary}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="clear">
//               <div className="row">
//                 <div className="col-4">
//                   <div className="features-box">
//                     <p className="uniqueReviewSafety"><img className="safetyIconR" src={Safety} alt="safety pin icon"/> {review.safety}</p>
//                   </div>
//                 </div>
//                 <div className="col-4">
//                   <div className="features-box">
//                     <p className="uniqueReviewBudget"><img className="walletIconR" src={Wallet} alt="wallet icon"/> {review.affordability}</p>
//                   </div>
//                 </div>
//                 <div className="col-4">
//                   <div className="features-box">
//                     <p className="uniqueReviewDress"><img className="hangerIconR" src={Hanger} alt="hanger icon"/> {review.dress}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       )
//     });
//   };
// };
// }
//
// function mapStateToProps(state){
//     return {
//       allReviews: state.reviews.allreviews.data
//     }
// }
//
//
// export default connect(mapStateToProps, {fetchUserReviews})(UserReview);