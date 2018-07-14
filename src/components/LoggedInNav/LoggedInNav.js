import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/index';

import './LoggedInNav.css';

class LoggedInNav extends React.Component{

  logOutUser(){
    this.props.logoutUser();
  };

  burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

  render(){
    return(
      <div>
        <nav>
          <div className="row">
            <div className="col-12">

              <div className="navWide">
                <div className="wideDiv">
                  <button
                    className="wide-nav-btn">
                    <Link className="link" to="/" onClick={this.logOutUser.bind(this)}><i className="fas fa-sign-out-alt wideIcon"></i>Log Out</Link>
                  </button>

                  <button className="wide-nav-btn">
                    <Link className="link" to="/explore"><i className="fas fa-map-signs wideIcon"></i>Explore</Link>
                  </button>

                  <button className="wide-nav-btn">
                    <Link className="link" to="/review"><i className="fas fa-star wideIcon"></i>Review</Link>
                  </button>

                  <button className="wide-nav-btn">
                    <Link className="link" to="/homepage"><i className="fas fa-home wideIcon"></i><br/>Home</Link>
                  </button>
                </div>
              </div>

              <div className="navNarrow">
                <div className="row">
                  <div className="col-12">
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="narrowLinks">

            <div className="row">
              <div className="col-12">
                <button className="narrow-nav-btn" onClick={this.burgerToggle}>
                  <Link className="linknarrow" to="/homepage"><i className="fas fa-home narrowIcon"></i>&nbsp;&nbsp;Home</Link>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="narrow-nav-btn" onClick={this.burgerToggle}>
                  <Link className="linknarrow" to="/review"><i className="fas fa-star narrowIcon"></i>&nbsp;&nbsp;Review</Link>
                </button>
                </div>
              </div>

            <div className="row">
              <div className="col-12">
                <button className="narrow-nav-btn" onClick={this.burgerToggle}>
                  <Link className="linknarrow" to="/explore"><i className="fas fa-map-signs narrowIcon"></i>&nbsp;&nbsp;Explore</Link>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  className="narrow-nav-btn" onClick={this.burgerToggle}>
                  <Link className="linknarrow" to="/" onClick={this.logOutUser.bind(this)}><i className="fas fa-sign-out-alt narrowIcon"></i>&nbsp;&nbsp;Log Out</Link>
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
      currentUser: state.users.loginRedirect
    }
}

export default connect(mapStateToProps, {logoutUser})(LoggedInNav);
