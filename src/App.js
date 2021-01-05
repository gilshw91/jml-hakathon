// import { useState, useEffect } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Home2 from "./components/Home2";
import Login from "./components/Login";
import OurVision from "./components/OurVision";

import { SignUpWizard } from "./components/wizard";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <div>
        <Navbar className="nav-bar">
          <Navbar.Brand as={Link} to="/">
            JMEET
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="colorNav">
              <NavItem eventkey={1} href="/">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={2} href="/about-us">
                <Nav.Link as={Link} to="/about-us">
                  About Us
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={3} href="/our-vision">
                <Nav.Link as={Link} to="/our-vision">
                  Our Vision
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={4} href="/login">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home2} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/our-vision" component={OurVision} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUpWizard} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
