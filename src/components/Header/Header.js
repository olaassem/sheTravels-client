import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
  render(){
    return(

      <div>
        <h1 className="header">Header Test</h1>
        <Link to ="/">Home</Link>
        <Link to ="/Login">Login</Link>
      </div>
    )
  }
}
