//app component

import React, { Component } from 'react';



// import logo from '../../assets/logo.svg';
import './App.css';


import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
