import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/index';
import {Redirect} from 'react-router-dom';
import './Login.css';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Login extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        username: "",
        password: ""
      }
    }

    scrollTo(){
      scroller.scrollTo('register', {
        duration: 2000,
        smooth: true
      });
    }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginUser(e){
    e.preventDefault();
    this.props.loginUser(this.state)
    .catch((error) => {
      let errorMessage = error.response.data.message;
      console.log(errorMessage);
    });


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
                          id="login-username"
                          name="username"
                          required
                          value={this.state.username}
                          onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="password-container">
                        <label htmlFor="pass-login">Password</label>
                        <input
                          type="password"
                          id="login-password"
                          name="password"
                          required
                          value={this.state.password}
                          onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="login-btn-container">
                        <button
                          className="login-btn"
                          onClick={this.loginUser.bind(this)}> Log In
                        </button>
                        {localStorage.getItem('token') && (<Redirect to="/homepage"/>)}
                      </div>
                    </div>
                  </div>
                  <p className="register-link">Do not have an account? &nbsp;
                    <Link

                      className="register-link-link"
                      to="register"
                      activeClass="active"
                      spy={true}
                      onClick={() => this.scrollTo()}>
                      Register
                    </Link>
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
      loginRedirect: state.users.loginRedirect
    }
}

export default connect(mapStateToProps, {loginUser})(Login);
