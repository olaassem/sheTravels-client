import React from 'react';
import ReactDOM from 'react-dom';

import './Map.css';
import '../../grid.css';


export default class Map extends React.Component {
  componentDidMount() {
      const google= window.google;
      let location = {
        lat: 40.000516,
        lng: 116.275482
      };


      console.log(location);

      //New map
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
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
      <div id="map">

      </div>
    )
  }
}
