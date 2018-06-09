import React from 'react';

import './Review.css';
import '../../grid.css';


import MapForm from '../MapForm/MapForm';
import MapFormResult from '../MapFormResult/MapFormResult';
import ReviewForm from '../ReviewForm/ReviewForm';

export default class Review extends React.Component{
  render(){
    return(
      <section>

            <div className="mapform-container">
              <MapForm />
              <MapFormResult />
              <ReviewForm />
            </div>

      </section>
    )
  }
}
