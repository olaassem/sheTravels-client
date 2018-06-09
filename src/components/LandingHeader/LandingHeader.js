import React from 'react';

import './LandingHeader.css';


export default class LandingHeader extends React.Component{
  render(){
    return(
      <header role="banner">
          <div className="row">
            <div className="col-12">
              <div className="appname-container">
                <h1 className="appname">SHE Travels</h1>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-12">
                <div className="subhdr-container">
                  <h2 className="sub-header">Travel reviews by & for solo female travelers</h2>
                </div>
              </div>
            </div>
      </header>
    )
  }
}
