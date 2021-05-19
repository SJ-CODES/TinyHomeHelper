import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'

import decode from 'jwt-decode';
import * as actionType from '../constants/userConstants';
// import useStyles from '../Components/Auth/AuthStyles';
import "./CSS/Header.css";
import HomeIcon from "@material-ui/icons/Home"

const Header = () => {
  
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/login');
  
      setUser(null);
    };
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Navbar.Brand href="/">
        <p className="headerTitle"><HomeIcon/>TinyHomeHelper</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          {/* <Nav.Link href="/login">Login/Register</Nav.Link> */}
          <NavDropdown title="Community" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/communityforum">
              Community Forum
            </NavDropdown.Item>
            <NavDropdown.Item href="/photoGallery">Photo Gallery</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/TinyHomeChecklist">
              Getting Started Checklist
            </NavDropdown.Item>
            <NavDropdown.Item href="/educationalresources">
              Tiny Home Articles
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.youtube.com/user/livingbigtinyhouse">
              Youtube Channel
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav> 
      </Navbar.Collapse>
      <Nav> 
        {user?.result ? (
            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
          ) : (
            <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;
