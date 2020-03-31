import React from "react";
import { Link, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/home">
          Home
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className="nav-item nav-link"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              to="/about"
            >
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/skills">
              Skills
            </NavLink>
            <NavLink className="nav-item nav-link" to="/project">
              Project
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <NavLink className="nav-item nav-link" to="/profile"></NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link className="navbar-brand" to="/home">
    //     Home
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="#navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    //     <div className="navbar-nav mr-auto">
    //       <NavLink
    //         className="nav-item nav-link"
    //         data-toggle="collapse"
    //         data-target="#navbarNavAltMarkup"
    //         to="/about"
    //       >
    //         About
    //       </NavLink>

    //       <NavLink className="nav-item nav-link" to="/skills">
    //         Skills
    //       </NavLink>

    //       <React.Fragment>
    //         <NavLink className="nav-item nav-link" to="/project">
    //           Project
    //         </NavLink>
    //         <NavLink className="nav-item nav-link" to="/contact">
    //           Contact
    //         </NavLink>
    //       </React.Fragment>

    //       <React.Fragment>
    //         <NavLink className="nav-item nav-link" to="/profile"></NavLink>
    //       </React.Fragment>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
