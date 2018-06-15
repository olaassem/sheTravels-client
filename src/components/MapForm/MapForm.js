import React from 'react';
import {connect} from 'react-redux';
import {saveCurrentLocation} from '../../actions/index';

import './MapForm.css';
import '../../grid.css';

//create class w/out export default
class MapForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: "",
      queryLatitude: "",
      queryLongitude: "",
      placeid: ""
    }
  }

  componentDidMount() {

    let placeSearch;
    let autocomplete;
    let geocoder;

    const google = window.google;

    geocoder = new google.maps.Geocoder();
    autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        types: ['geocode']
      });

    autocomplete.addListener('place_changed', function(){

      let place = autocomplete.getPlace();
      // codeAddress(document.getElementById('autocomplete').value);

      let address = document.getElementById('autocomplete').value;
      geocoder.geocode({
      		'address': address
      	}, function( results, status ){

          console.log(results[0]);

      		if (status === 'OK') {

            let placeid = results[0].place_id;
      			let queryLatitude = results[0].geometry.location.lat();
      			let queryLongitude = results[0].geometry.location.lng();
            let formattedAddress = results[0].formatted_address;

            // debugger
            // document.addEventListener('click', (e) => {
            //   this.setState({
            //     address,
            //     queryLatitude,
            //     queryLongitude,
            //     placeid
            //   });
            // })

            // debugger
            // document.addEventListener('click', function (e) {
            //   this.setState({
            //     address,
            //     queryLatitude,
            //     queryLongitude,
            //     placeid
            //   });
            // }.bind(this));


            console.log(`state: ` + this.state);


          	} else {
          		console.log( status );
          	}
        	});


    });
  }

  // handleChange(e){
  //   this.setState({
  //     address,
  //     queryLatitude,
  //     queryLongitude,
  //     placeid
  //   });
  // }



  postMapInfo(e){
    e.preventDefault();
    debugger
    console.log(this.state);
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
              required
              // onChange={this.handleChange.bind(this)}
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

export default connect(mapStateToProps, {saveCurrentLocation})(MapForm);
