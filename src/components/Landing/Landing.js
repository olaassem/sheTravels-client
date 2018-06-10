import React from 'react';


import './Landing.css';
import '../../grid.css';


import LandingHeader from '../LandingHeader/LandingHeader';
import JoinPitch from '../JoinPitch/JoinPitch';
import Register from '../Register/Register';


export default class Landing extends React.Component{

  render(){
    return(
      <div>
        <LandingHeader />
        <div className="joinpitch-section">
          <div className="row">
            <JoinPitch title="Why Join 1" content="content placeholder 1"/>
            <JoinPitch title="Why Join 2" content="content placeholder 2"/>
            <JoinPitch title="Why Join 3" content="content placeholder 3"/>
          </div>
        </div>
        <Register />
      </div>
    )
  }
}
