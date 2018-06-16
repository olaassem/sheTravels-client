import React from 'react';
import {getPlaceDetails} from '../../actions/index';
import {connect} from 'react-redux';

import './PlaceDetails.css';
import '../../grid.css';



class PlaceDetails extends React.Component{



  render(){
  //   let placeid = this.props.currentLocation.placeid;
  //   this.props.getPlaceDetails(placeid);
  //  let imageRef = this.props.currentLocation.data.result.photos["0"].photo_reference;
  //  console.log(`getplacedetails:` + this.props.currentLocation);

    return(
      <div className="col-4">
        <div className="placedetails-container">
          <div className="destination-img-container">Destination Image Placeholder</div>
            <h4 className="location">{this.props.currentLocation.address}</h4>
            <p className="address">{this.props.currentLocation.formattedAddress}</p>
          <div className="row">
            <div className="col-12">
              <button className="review-btn">Review</button>
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
