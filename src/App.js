import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import AuthenticatedLayout from './Components/AuthenticatedLayout/AuthenticatedLayout';
import UnauthenticatedLayout from './Components/UnauthenticatedLayout/UnauthenticatedLayout';
import axios from 'axios';


class App extends Component {
  state = {
    fetcheduser:false,
  }

  componentDidMount(){
    axios.get('/api/me').then(response => {

    }

    )
  }

  render() {
    return (
      <div className="App">
       <AuthenticatedLayout />
       {/* <UnauthenticatedLayout /> */}
      
      </div>
    );
  }
}

export default App;
