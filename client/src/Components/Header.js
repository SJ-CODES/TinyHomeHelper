import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./CSS/Header.css";


function Header() {
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
