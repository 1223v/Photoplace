import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";


const MainText=styled.h1`
   
   font-size:25px;
   margin: auto;
   font-weight:bolder;
   font-family: 'Yellowtail', cursive;
   @media (min-width: 800px) {
    font-size:38px;
  }
`;



function NavBar() {
  
  return (
    <div>
    <Navbar style={{backgroundColor:"#FFFFFF"}}>
    <Container >
    <Navbar.Brand className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25"><MainText>Photo Place</MainText></Navbar.Brand>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
  </svg>
    </Container>
  </Navbar>
</div>
  )
}

export default NavBar