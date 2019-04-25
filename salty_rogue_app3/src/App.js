import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import CreatePhoneRecord from './components/CreatePhoneRecord'
import CallList from './components/CallList'
import EditPhoneRecord from './components/EditPhoneRecord'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={CallList} />
          <Route path="/EditPhoneRecord/:id" component={EditPhoneRecord} />
          <Route path="/CreatePhoneRecord" component={CreatePhoneRecord} />
        </div>
      </Router>
    );
  }
}

export default App;
