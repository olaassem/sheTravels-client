import React from 'react';

import './Homepage.css';
import '../../grid.css';

import LoggedInNav from '../LoggedInNav/LoggedInNav';
import Greeting from '../Greeting/Greeting';


export default class Homepage extends React.Component{
  render(){
    return(
      <div>
        <LoggedInNav />
        <Greeting />
      </div>
    )
  }
}
