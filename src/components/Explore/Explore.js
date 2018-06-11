import React from 'react';


import './Explore.css';
import '../../grid.css'

import LoggedInNav from '../LoggedInNav/LoggedInNav';
import AllReviewsContainer from '../AllReviewsContainer/AllReviewsContainer';

export default class Explore extends React.Component{
  render(){
    return(
      <div>
        <LoggedInNav />
        <AllReviewsContainer />
      </div>
    )
  }
}
