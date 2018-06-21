import React from 'react';
import {connect} from 'react-redux';
import {saveCurrentLocation, getPlaceDetails} from '../../actions/index';
import {required, nonEmpty, isTrimmed} from '../validators';

import Map from '../Map/Map';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import './MapForm.css';
import '../../grid.css';


class MapForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address:"",
      formattedAddress: "",
      queryLatitude: "",
      queryLongitude: "",
      placeid: "",
      imageRef:"",
      isHidden: true
    }
  }

  componentDidMount() {

    let autocomplete;
    let geocoder;

    const google = window.google;

    geocoder = new google.maps.Geocoder();
    autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        types: ['geocode']
      });

    autocomplete.addListener('place_changed',function(){

      let place = autocomplete.getPlace();

      let address = document.getElementById('autocomplete').value;
      geocoder.geocode({
      		'address': address
      	}, function ( results, status ){

          console.log(address);
          console.log(results[0]);

      		if (status === 'OK') {

            let placeid = results[0].place_id;
      			let queryLatitude = results[0].geometry.location.lat();
      			let queryLongitude = results[0].geometry.location.lng();
            let formattedAddress = results[0].formatted_address;


            this.setState({
              address,
              formattedAddress,
              queryLatitude,
              queryLongitude,
              placeid,
              isHidden: !this.state.isHidden,
              imageRef:""
            })


            // this.props.getPlaceDetails(placeid);


            this.props.saveCurrentLocation({
              address,
              formattedAddress,
              queryLatitude,
              queryLongitude,
              placeid
            })

            console.log(this.props.currentLocation);

          	} else {
          		console.log( status );
          	}
        	}.bind(this))
    }.bind(this))
  }



  toggleHidden (e) {
    e.preventDefault();
    // this.setState({
    //   isHidden: !this.state.isHidden
    // })
  }

  render() {

    return (
      <form className="mapform">
        <fieldset >
          <legend className="mapform-legend"> Search Location </legend>
          <p className="instruction">Type in the location you want to review & select an option from the dropdown.</p>
          <div id = "locationField">
            <input id = "autocomplete"
              type = "text"
              placeholder = "e.g. Temple of Heaven"
              validate={[required, nonEmpty, isTrimmed]}
            />
        </div>

        <div className = "col-12" >
          <button
            className="hidden"
            type = "submit"
            id = "search-btn"
            onClick={this.toggleHidden.bind(this)}>
            Find
          </button>
          {!this.state.isHidden &&
            <div className="mapform-results-container">
              <div className="row">
                <div className="col-12">
                  <Map />
                  <PlaceDetails />
                </div>
              </div>
            </div>
          }
        </div>
      </fieldset>
    </form>
    )
  }
}


function mapStateToProps(state){
    return{
      currentLocation: state.location.currentSearchLocation
    }
}

export default connect(mapStateToProps, {saveCurrentLocation, getPlaceDetails})(MapForm);
