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
    let reviewItem;
    let dbReviews = this.props.allReviews;
    console.log(dbReviews);
    // if(dbReviews.length > 0){
    //   reviewItem = dbReviews.map((item, index) => {
    //     return (
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="uniquereview-container" key={index}>
    //             <p className="uniqueReviewRating">{item.rating}</p>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   });
    // };
    return (
      <div>
        // {reviewItem}
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
