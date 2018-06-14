import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/index';

import './LoggedInNav.css';

// import LogoIcon from '../../assets/logo1.png';
// <img className="logo" src={LogoIcon} alt="SHETravels logo"/>


class LoggedInNav extends React.Component{

  logOutUser(){
    this.props.logoutUser();
  };

  render(){
    return(
      <div>
        <nav>
          <div className="row">
            <div className="col-12">

              <div className="navigation-container">

                <button
                  className="nav-btn">
                  <Link className="link" to="/" onClick={this.logOutUser.bind(this)}><i className="fas fa-sign-out-alt"></i>Log Out</Link>
                </button>

                <button className="nav-btn">
                  <Link className="link" to="/explore"><i className="fas fa-map-signs"></i>Explore</Link>
                </button>

                <button className="nav-btn">
                  <Link className="link" to="/review"><i className="fas fa-star"></i>Review</Link>
                </button>

                <button className="nav-btn">
                  <Link className="link" to="/homepage"><i className="fas fa-home"></i><br/>Home</Link>
                </button>

              </div>
            </div>
          </div>
          </nav>
        </div>
    )
  }
}


function mapStateToProps(state){
    return{
      currentUser: state.users.auth
    }
}

export default connect(mapStateToProps, {logoutUser})(LoggedInNav);
