import React from 'react';

import './Homepage.css';
import '../../grid.css';

import Greeting from '../Greeting/Greeting';


export default class Homepage extends React.Component{
  render(){
    return(
      <div>
        <Greeting />
      </div>
    )
  }
}
