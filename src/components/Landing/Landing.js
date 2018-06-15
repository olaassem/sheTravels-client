import React from 'react';


import './Landing.css';
import '../../grid.css';

import Login from '../Login/Login';
import LandingHeader from '../LandingHeader/LandingHeader';
import JoinPitch from '../JoinPitch/JoinPitch';
import Register from '../Register/Register';


export default class Landing extends React.Component{

  render(){
    return(
      <div>
        <Login />
        <LandingHeader />
        <div className="joinpitch-section">
          <div className="row">
            <JoinPitch content="Join the largest & most diverse community of solo female travelers worldwide."/>
            <JoinPitch content= "Say goodbye to wasting time sifting through endless unhelpful travel sites & threads."/>
            <JoinPitch content="Find & share destination reviews & tips that matter to you & other solo female travelers."/>
          </div>
        </div>
        <Register />
      </div>
    )
  }
}
