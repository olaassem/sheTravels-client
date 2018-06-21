import React from 'react';
import {Link} from 'react-router-dom';
import {getPlaceDetails} from '../../actions/index';
import {connect} from 'react-redux';

import './PlaceDetails.css';
import '../../grid.css';



class PlaceDetails extends React.Component{


//only do something if the props have changed.
//
  componentDidUpdate(prevProps){
    let placeid = this.props.currentLocation.placeid;
    console.log(placeid);

    if (placeid !== prevProps.currentLocation.placeid) {
      this.props.getPlaceDetails(placeid);
    }
  }


  render(){
       console.log(this.props.placeDetailsInfo);

       if(Object.keys(this.props.placeDetailsInfo).length === 0 && this.props.placeDetailsInfo.constructor === Object){
         return(<p>Loading</p>)
       }

       let imageRef = this.props.placeDetailsInfo.photos[0].photo_reference;

       let imageURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=` + imageRef + `&key=AIzaSyA6ECb06GHjgfRQjrOJKy6tQqScBimbFmA`;
       console.log(imageURL);



    return(
      <div className="col-4">
        <div className="placedetails-container">
          <div className="destination-img-container">
            <img src={imageURL} alt=""/>
          </div>
            <h4 className="location">{this.props.currentLocation.address}</h4>
            <p className="address">{this.props.currentLocation.formattedAddress}</p>
          <div className="row">
            <div className="col-12">
              <button className="review-btn">
              <Link className="submitform-link" to="/reviewform">Review</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
      currentLocation: state.location.currentSearchLocation,
      placeDetailsInfo: state.location.placeDetailsInfo,
    }
}

export default connect(mapStateToProps, {getPlaceDetails})(PlaceDetails);
