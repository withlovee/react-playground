import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      display: this.props.display,
    };
  }
  loginClick = (evt) => {
    let email = this.refs.email.value
    let password = this.refs.password.value
    var errors = [];
    if (email.length == 0) {
      errors.push('Please fill in email');
    }
    else if (! /^([a-z0-9A-Z\.]{2,})$/.test(email)) {
      errors.push('Email must only contain alphanumeric characters and the length is greater than 2')
    }
    if (password.length == 0) {
      errors.push('Please fill in password');
    }
    else if (! /^(.{6,})$/.test(password)) {
      errors.push('Password length must be greater than 6')
    }

    if (errors.length > 0) this.setState({ errors: errors })
    else {
      this.setState({ errors: [] })
      this.submit(evt)
    }
  }
  open = (evt) => {
    this.setState({ display: 'show' })
  }
  close = (evt) => {
    this.setState({ display: 'fade' })
  }
  submit = (evt) => {
    console.log('submit!')
  }
  render() {
    return (
      <span>
        <a href="#" className={this.props.buttonClass} onClick={this.open}>
        Login
        </a>

        <div className={`modal ${this.state.display}`} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.close}><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="modal-body text-left">
                
                {this.state.errors.length > 0 &&
                  <div class="alert alert-danger" role="alert">
                    <ul>
                      {this.state.errors.map((item, index) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                }

                <form>
                  <div className="form-group">
                    <label for="email">Email address</label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="email" ref="email" placeholder="y.yourname" />
                      <div className="input-group-addon">@criteo.com</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" ref="password" placeholder="********" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.close}>Close</button>
                <button type="button" className="btn btn-primary" onClick={this.loginClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}