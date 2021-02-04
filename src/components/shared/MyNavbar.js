import React from "react";
import { Link } from "react-router-dom";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Nav className="background_ltBlue ">
        <NavItem>
          <NavLink tag={RRNavLink} to="/">
            Main
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/expenses">
            Expenses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/signup">
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/records">
            Records
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/login">
            Log in/out
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
