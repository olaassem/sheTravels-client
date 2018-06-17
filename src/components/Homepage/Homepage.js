import React from 'react';
import {connect} from 'react-redux';


import './Homepage.css';
import '../../grid.css';

import LoggedInNav from '../LoggedInNav/LoggedInNav';
import Greeting from '../Greeting/Greeting';
import UserReviewsContainer from '../UserReviewsContainer/UserReviewsContainer';



class Homepage extends React.Component{
  render(){
    return(
      <div>
        <LoggedInNav />
        <Greeting />
        <UserReviewsContainer />
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
