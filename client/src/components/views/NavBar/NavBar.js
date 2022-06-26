import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Link } from 'react-router-dom';
//import LeftMenu from './Sections/LeftMenu';
//import { Drawer, Button} from 'antd';
//import {EditOutlined} from '@ant-design/icons';
//import './Sections/Navbar.css';

function NavBar() {
  
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">AI와 함께하는 포토맵 투어</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/AIcontent">AIcontent</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar