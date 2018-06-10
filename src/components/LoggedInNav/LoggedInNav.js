import React from 'react';
import {Link} from 'react-router-dom';

import './LoggedInNav.css';
// import LogoIcon from '../../assets/logo1.png';
// <img className="logo" src={LogoIcon} alt="SHETravels logo"/>

export default class Login extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-12">

          <div className="navigation-container">



            <button className="nav-btn">
              <Link className="link" to="/"><i className="fas fa-sign-out-alt"></i>Log Out</Link>
            </button>

            <button className="nav-btn">
              <Link className="link" to="/explore"><i class="fas fa-map-signs"></i>Explore</Link>
            </button>

            <button className="nav-btn">
              <Link className="link" to="/review"><i class="fas fa-star"></i>Review</Link>
            </button>

            <button className="nav-btn">
              <Link className="link" to="/homepage"><i class="fas fa-home"></i><br/>Home</Link>
            </button>

          </div>
        </div>
      </div>
    )
  }
}
