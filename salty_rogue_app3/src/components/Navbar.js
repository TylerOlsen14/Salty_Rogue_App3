import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../logo.jpg';
import style from "../App.css";

export class Navbar extends Component {
  render() {
    return (
    <Router>
    <div>
        <nav className="navbar">
            <Link to="/">
                <img src={Logo} alt="Salt Rogue Real Estate"/> 
            </Link>
            <div>
                <ul id="navBarUL">
                    <li className="nav-item ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CallList">Phone Call List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CreatePhoneRecord">New Call Record</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </Router>
    )
  }
}

export default Navbar
