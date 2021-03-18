import React, { Component } from "react";
import {Row,Col} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
<Row className="landing">
<Col> <img src ="assets/loginimg.png" alt="image"/> </Col>
<Col>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p><Link className="nav-link text-right" to={"/sign-up"}>Sign up</Link></p>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
</Col>
</Row>
);
    }
}
