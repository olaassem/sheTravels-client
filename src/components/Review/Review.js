import React from 'react';

import './Review.css';
import '../../grid.css';

import LoggedInNav from '../LoggedInNav/LoggedInNav';
import MapForm from '../MapForm/MapForm';
import MapFormResult from '../MapFormResult/MapFormResult';
import ReviewForm from '../ReviewForm/ReviewForm';

export default class Review extends React.Component{
  render(){
    return(
      <div>
        <LoggedInNav />
        <div className="mapform-container">
          <MapForm />
          <MapFormResult />
          <ReviewForm />
        </div>

      </div>
    )
  }
}
