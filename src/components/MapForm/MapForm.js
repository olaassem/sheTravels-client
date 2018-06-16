import React from 'react';
import {connect} from 'react-redux';
import {saveCurrentLocation, getPlaceDetails} from '../../actions/index';
import {required, nonEmpty, isTrimmed} from '../validators';

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
      imageRef:""
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


//remove
  postMapInfo(e){
    e.preventDefault();
  //pass state to map & place details
  }

  render() {

    return (
      <form className="mapform">
        <fieldset >
          <legend className="mapform-legend"> Search Location </legend>
          <div id = "locationField">
            <input id = "autocomplete"
              type = "text"
              placeholder = "e.g. Temple of Heaven"
              validate={[required, nonEmpty, isTrimmed]}
            />
          <div className = "row" >
            <div className = "col-12" >
              <button
                type = "submit"
                id = "search-btn"
                onClick={this.postMapInfo.bind(this)}>
                Find
              </button>
            </div>
          </div>
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
