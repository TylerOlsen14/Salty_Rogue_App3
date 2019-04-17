import React, { Component } from 'react';
import NewPhoneRecord from './components/NewPhoneRecord';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <NewPhoneRecord/>
      </div>
    );
  }
}

export default App;
