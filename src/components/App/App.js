//app component
import React, { Component } from 'react';

import './App.css';


import Main from '../Main/Main';
import Footer from '../Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
