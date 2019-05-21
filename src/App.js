import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
// import Login from './Components/Login/Login';
// import Abs from './Components/Abs/Abs';
// import Arms from './Components/Arms/Arms';
// import Back from './Components/Back/Back';
//  import Chest from './Components/Chest/Chest';
// import Legs from './Components/Legs/Legs';
//  import Shoulders from './Components/Shoulders/Shoulders';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
// import Form from './Components/Form/Form';
// import Goals from './Components/Goals/Goals';
// import Update from './Components/Update/Update';
import Routes from './Routes';
// import Workouts from './Components/Workouts/Workouts';





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
