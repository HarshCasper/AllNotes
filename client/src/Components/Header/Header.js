import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="nav__brand" href="/dashboard">
              AllNotes
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto nav__items align-items-center" navbar>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/notes">
                    Notes
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/connect">
                    Connect
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
