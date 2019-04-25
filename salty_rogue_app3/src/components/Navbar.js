import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Logo from '../logo.jpg';
import "../App.css";

export class Navbar extends Component {
  render() {
    return (
    <Router>
    <div>
        <nav className="navbar">
            <a href="/" class="nav-link">
                <img src={Logo} alt="Salt Rogue Real Estate"/> 
            </a>
            <ul>
                <li className="nav-item">
                    <button>
                        <a href="/" class="nav-link">Phone Call List</a>
                    </button>
                </li>
                {/* <li className="nav-item">
                    <a href="/CallList">Phone Call List</a>
                </li> */}
                <li className="nav-item">
                    <button>
                        <a href="/CreatePhoneRecord" class="nav-link">New Call Record</a>
                    </button>
                </li>
            </ul>
            {/* </div> */}
        </nav>
    </div>
    </Router>
    )
  }
}

export default Navbar
