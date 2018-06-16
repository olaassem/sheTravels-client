import React from 'react';


import './MapFormResult.css';
import '../../grid.css';


import Map from '../Map/Map';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default class MapFormResult extends React.Component{
  render(){
    return(
      <div className="mapform-results-container">
      <div className="row">

          <Map />
          <PlaceDetails />
        </div>
      </div>
    )
  }
}
