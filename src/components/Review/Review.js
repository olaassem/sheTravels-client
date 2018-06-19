import React from 'react';

import './Review.css';
import '../../grid.css';

import LoggedInNav from '../LoggedInNav/LoggedInNav';
import MapForm from '../MapForm/MapForm';


export default class Review extends React.Component{
  render(){
    return(
      <div>
        <LoggedInNav />
        <div className="mapform-container">
          <MapForm />
        </div>
      </div>
    )
  }
}
