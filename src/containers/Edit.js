import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Edit extends Component {
  render() {
    return (
      <div className="Edit">
        <div className="lander">
          <h1>Edit</h1>
          <textarea></textarea>
          <p><a href="/">back to home</a> | <Link to="/">App</Link></p>
        </div>
      </div>
    );
  }
}