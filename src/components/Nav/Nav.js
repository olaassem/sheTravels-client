import React from 'react';
import './Nav.css';

import Login from '../Login/Login';

export default class Nav extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <Login />
        </nav>
      </div>
    )
  }
}
