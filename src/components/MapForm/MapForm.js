import React from 'react';
import {connect} from 'react-redux';
import {saveCurrentLocation} from '../../actions/index'; //action we want to trigger

import './MapForm.css';
import '../../grid.css';

//create class w/out export default
class MapForm extends React.Component {

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
      		//if valid query input
      		if (status === 'OK') {
      			let queryLatitude = results[0].geometry.location.lat();
      			let queryLongitude = results[0].geometry.location.lng();
            let placeid = results[0].place_id;

    console.log(placeid);
            //Call api functions and pass lat and lng params through them
      			// initMap( queryLatitude, queryLongitude );
            // getDetails( placeid );
            	//if invalid query input
          	} else {
          		console.log( status );
          	}
        	});
    });
  }

findLocation(e){
  e.preventDefault();
  this.props.saveCurrentLocation("Lincoln Memorial");
}

  render() {
    debugger
    return (
      <form className="mapform">
        <fieldset >
          <legend className="mapform-legend"> Search Location </legend>
          <div id = "locationField">
            <input id = "autocomplete"
              type = "text"
              placeholder = "e.g. Temple of Heaven"
              required = ""
            />
          <div className = "row" >
            <div className = "col-12" >
              <button type = "submit" id ="search-btn" onClick={this.findLocation.bind(this)}> Find < /button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
    )
  }
}

//mapping the state(this.reducer) to props(in component)
function mapStateToProps(state){
    return{
      //return key you want to use and the value from the reducer
      currentLocation: state.location.currentSearchLocation
    }
}
//return object
// function mapDispatchToProps(){
//     {saveCurrentLocation}     //the value is the action variable imported on top
// }

//calling connect function
//1.connect reducer with componenet, 2. connect action w component
export default connect(mapStateToProps, {saveCurrentLocation})(MapForm); //(MapForm here is the same as export default)
