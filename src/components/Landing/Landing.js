import React from 'react';


import './Landing.css';
import '../../grid.css';

import Login from '../Login/Login';
import LandingHeader from '../LandingHeader/LandingHeader';
import JoinPitch from '../JoinPitch/JoinPitch';
import Register from '../Register/Register';

import Globe from '../../assets/globe.png';
import Time from  '../../assets/time.png';
import Share from '../../assets/share.png';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default class Landing extends React.Component{

  render(){
    return(
      <div>
        <Login />
        <LandingHeader />
        <div className="joinpitch-section">
          <div className="row">
            <JoinPitch content="Join the largest & most diverse community of solo female travelers worldwide." pic={Globe}/>
            <JoinPitch content= "Say goodbye to wasting time sifting through endless unhelpful travel sites & threads." pic={Time}/>
            <JoinPitch content="Find & share destination reviews & tips that matter to you & other solo female travelers." pic={Share}/>
          </div>
        </div>
        <Element name="register"></Element>
        <Register />
      </div>
    )
  }
}
