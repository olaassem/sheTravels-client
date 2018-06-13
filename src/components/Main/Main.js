import React from 'react';
import './Main.css';
import {Switch, Route} from 'react-router-dom';

import Landing from '../Landing/Landing';
import Homepage from '../Homepage/Homepage';
import Review from '../Review/Review';
import Explore from '../Explore/Explore';


export default class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </main>
    )
  }
}
