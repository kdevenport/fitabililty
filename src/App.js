import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Routes from './Routes';






class App extends Component {
  render() {
    return (
      <div className="App">
       <Header /> 
       <Navbar />
       { Routes }
      </div>
    );
  }
}

export default App;
