import React from 'react';

import './Review.css';
import '../../grid.css';


import MapForm from '../MapForm/MapForm';
import MapFormResult from '../MapFormResult/MapFormResult';


export default class Review extends React.Component{
  render(){
    return(
      <section>
        <div className="row">
          <div className="col-12">
            <div className="mapform-container">
              <MapForm />
              <MapFormResult />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
