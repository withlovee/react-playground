import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home</h1>
          <p>homepage</p>
          <p><a href="edit">go edit</a> | <Link to="edit">edit</Link></p>
        </div>
      </div>
    );
  }
}