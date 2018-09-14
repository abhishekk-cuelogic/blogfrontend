import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import SignUp from './component/signup/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <SignUp></SignUp>
      </div>
    );
  }
}

export default App;
