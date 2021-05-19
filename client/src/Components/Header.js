import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./CSS/Header.css";
import HomeIcon from "@material-ui/icons/Home"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <p className="headerTitle"><HomeIcon/>TinyHomeHelper</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/login">Login/Register</Nav.Link>
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
    </Navbar>
  );
}

export default Header;
