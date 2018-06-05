import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

export default class Login extends React.Component{
  render(){
    return(
      <form className="login-form">
        <fieldset>
          <label htmlFor="username-login">Username</label>
          <input type="text" id="firstname-login"/>
          <label htmlFor="pass-login">Password</label>
          <input type="text" id="pass-login"/>
          <button className="login-btn">Log In</button>
          <Link to ="/homepage">Homepage</Link>
          <p className="register-link">Do not have an account? <a href="#register-header">Register</a></p>
        </fieldset>
      </form>
    )
  }
}
