import React from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

export default class Login extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <div className="row">
            <div className="col-12">
              <div className="login-container">
                <form className="login-form">
                  <fieldset>
                  <div className="row">
                    <div className="col-4">
                      <div className="username-container">
                        <label htmlFor="username-login">Username</label>
                        <input
                          type="text"
                          id="firstname-login"/>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="password-container">
                        <label htmlFor="pass-login">Password</label>
                        <input type="text" id="pass-login"/>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="login-btn-container">
                        <button
                          className="login-btn">
                          <Link to="/homepage">Log In
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                    <p className="register-link">Do not have an account?
                      <a className="register-link-link" href="#register-header">Register</a>
                    </p>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
