import React from 'react';
import {connect} from 'react-redux';
import {displayLocationMarker} from '../../actions/index';

import './Map.css';
import '../../grid.css';


class Map extends React.Component {

  componentDidMount() {
      const google= window.google;

      let location = {
        lat: 34.5531,
        lng: 18.0480
      };

      //New map
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: location
      });

      //Location marker
      let marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
      });
    }

    componentDidUpdate(){
      const google= window.google;
      let location = {
        lat: parseFloat(this.props.currentLocation.queryLatitude),
        lng: parseFloat(this.props.currentLocation.queryLongitude)
      };

      console.log(location.lat);

      //New map
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
      });

      //Location marker
      let marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
      });
    }

  render() {

    return (
      <div className="col-8">
        <div id="map"></div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
      currentLocation: state.location.currentSearchLocation
    }
}

export default connect(mapStateToProps, {displayLocationMarker})(Map);
