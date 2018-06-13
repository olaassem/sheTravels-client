import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/index'; //action we want to trigger

import './Login.css';

class Login extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        username: "",
        password: ""
      }
    }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginUser(e){
    e.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state);
    this.setState({
      username: "",
      password: ""
    });
  }

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
                          id="firstname-login"
                          name="name"
                          required
                          onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="password-container">
                        <label htmlFor="pass-login">Password</label>
                        <input
                          type="text"
                          id="pass-login"
                          name="password"
                          required
                          onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="login-btn-container">
                        <button
                          className="login-btn"
                          onClick={this.loginUser.bind(this)}>
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



function mapStateToProps(state){
    return{
      currentUser: state.users.auth
    }
}

export default connect(mapStateToProps, {loginUser})(Login);
