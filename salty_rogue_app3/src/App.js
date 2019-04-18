import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewPhoneRecord from './components/NewPhoneRecord';
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

          <CallList/>
          <Route path="/" exact component={CallList} />
          <Route path="/EditPhoneRecord/:id" exact component={EditPhoneRecord} />
          <Route path="/CreatePhoneRecord" exact component={CreatePhoneRecord} />
        </div>
      </Router>
    );
  }
}

export default App;
