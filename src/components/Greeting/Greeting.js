import React from 'react';
import {Link} from 'react-router-dom';


import './Greeting.css';
import '../../grid.css';


export default class Greeting extends React.Component{
  render(){
    return(
      <div className="greeting">
        <h2 >What would you like to do, "First Name"?</h2>
        <Link to ="/review">Review a Destination</Link>
        <Link to ="/explore">Explore Reviews</Link>
      </div>
    )
  }
}
