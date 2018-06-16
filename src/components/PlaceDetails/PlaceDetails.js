import React from 'react';
import {getPlaceDetails} from '../../actions/index';
import {connect} from 'react-redux';

import './PlaceDetails.css';
import '../../grid.css';



class PlaceDetails extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-12">
          <div className="placedetails-container">
            <div className="destination-img-container">Destination Image Placeholder</div>

              <h4 className="location">"location"</h4>
              <p className="address">{this.props.currentLocation.address}</p>
            <div className="row">
              <div className="col-12">
                <button className="review-btn">Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
      currentLocation: state.location.currentSearchLocation
    }
}

export default connect(mapStateToProps, {getPlaceDetails})(PlaceDetails);
