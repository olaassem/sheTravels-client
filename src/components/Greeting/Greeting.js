import React from 'react';
import {Link} from 'react-router-dom';


import './Greeting.css';
import '../../grid.css';


import reviewIcon from "../../assets/review.png";
import exploreIcon from "../../assets/explore.png";


export default class Greeting extends React.Component{
  render(){
    return(

          <div className="greeting">
            <h2 className="choice">What would you like to do, {localStorage.getItem('name')}?</h2>
            <div className="row">
              <div className="col-6">
                <div className="review-link">
                  <Link className="link" to="/review">Review a Location
                    <img className="review-img" src={reviewIcon} alt="female traveler sitting down using mobile device"/>
                  </Link>

                </div>
              </div>
              <div className="col-6">
                <div className="explore-link">
                  <Link className="link" to="/explore">Explore Reviews
                    <img className="explore-img" src={exploreIcon} alt="female traveler using binoculars"/>
                  </Link>

                </div>
              </div>
            </div>
          </div>
    )
  }
}
