import React from 'react';
import {connect} from 'react-redux';


import './Homepage.css';
import '../../grid.css';

import LoggedInNav from '../LoggedInNav/LoggedInNav';
import Greeting from '../Greeting/Greeting';




class Homepage extends React.Component{
  render(){
    debugger
    return(
      <div>
        <LoggedInNav />
        <Greeting />
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
      user: state.users
    }
}

export default connect(mapStateToProps, {})(Homepage);
