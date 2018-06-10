import React from 'react';
import './Nav.css';

// import Login from '../Login/Login';
import LoggedInNav from '../LoggedInNav/LoggedInNav';

export default class Nav extends React.Component{
  render(){
    return(
      <div>
        <nav>

          <LoggedInNav />
        </nav>
      </div>
    )
  }
}


          // <Login />
