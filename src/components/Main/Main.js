import React from 'react';
import './Main.css';
import {Switch, Route} from 'react-router-dom';


import Home from '../Home/Home';
import Login from '../Login/Login';



export default class Main extends React.Component{
  render(){
    return(
      <main>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>


      </main>
    )
  }
}
