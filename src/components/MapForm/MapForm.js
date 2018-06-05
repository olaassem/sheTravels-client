import React from 'react';


import './MapForm.css';
import '../../grid.css';


export default class MapForm extends React.Component {

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


















  render() {
    return ( <
      form >
      <
      fieldset >
      <
      legend className = "sub-intro" > Search destination < /legend> <
      div id = "locationField" >
      <
      input id = "autocomplete"
      type = "text"
      placeholder = "e.g. Temple of Heaven"
      required = "" / >
      <
      div className = "row" >
      <
      div className = "col-12" >
      <
      button type = "submit"
      id = "searchbutton" > DISCOVER < /button> <
      /div> <
      /div> <
      /div> <
      /fieldset> <
      /form>
    )
  }
}
