import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';

import decode from 'jwt-decode';
import * as actionType from '../constants/userConstants';
import useStyles from '../Components/Auth/AuthStyles';
import "./CSS/Header.css";

const Header = () => {
  
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/auth');
  
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
    <div className="header">
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Brand href="/">TinyHomeHelper</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <NavDropdown title="Community" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login">Login/Register</NavDropdown.Item>

              <NavDropdown.Item href="/communityforum">
                Community Forum
              </NavDropdown.Item>
              <NavDropdown.Item href="/photoGallery">Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Option #3
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/TinyHomeChecklist">The Checklist</NavDropdown.Item>
              <NavDropdown.Item href="/educationalresources">Education</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/user/livingbigtinyhouse">Videos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Option #4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

}

export default Header;
