import React from 'react';

import './LandingHeader.css';


export default class LandingHeader extends React.Component{
  render(){
    return(
      <header role="banner">
            <h1 className="appname">sheTravels</h1>
            <h2 className="sub-header">Travel reviews and tips for and by solo female travelers</h2>
      </header>
    )
  }
}
