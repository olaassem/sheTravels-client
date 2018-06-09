import React from 'react';


import './PlaceDetails.css';
import '../../grid.css';



export default class PlaceDetails extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-12">
          <div className="placedetails-container">
            <div class="destination-img-container">Destination Image Placeholder</div>
              <h4 className="location">"location"</h4>
              <p className="address">"address"</p>
            <div className="row">
              <div className="col-12">
                <button class="review-btn">Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
