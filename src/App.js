import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import LoginPopup from './components/LoginPopup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><Link to="edit">Edit</Link></li>
              <li><LoginPopup buttonClass="btn btn-primary" /></li>
            </ul>
          </div>
        </Navbar>
        
        <Routes />
      </div>
    );
  }
}

export default App;
