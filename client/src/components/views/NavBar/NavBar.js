import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Link } from 'react-router-dom';
import styled from "styled-components";
//import LeftMenu from './Sections/LeftMenu';
//import { Drawer, Button} from 'antd';
//import {EditOutlined} from '@ant-design/icons';
//import './Sections/Navbar.css';

const MainText=styled.h1`
   
   font-size:25px;
   font-weight:bolder;
   font-family: 'Yellowtail', cursive;
   @media (min-width: 800px) {
    font-size:38px;
  }
`;

const SubText=styled.h2`
   
   font-size:25px;
   font-weight:bolder;
   font-family: 'Jua', sans-serif;
   @media (min-width: 800px) {
    font-size:17px;
  }
`;
function NavBar() {
  
  return (
    <Navbar bg="light" expand="lg">
  <Container>
	  <Navbar.Brand href="#home" ><MainText>PhotoPlace</MainText></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/"><SubText>Home</SubText></Nav.Link>
        <Nav.Link href="/AIcontent"><SubText>AIcontent</SubText></Nav.Link>
        <SubText><NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">A Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">B Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Link</NavDropdown.Item>
        </NavDropdown>
		  </SubText>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar