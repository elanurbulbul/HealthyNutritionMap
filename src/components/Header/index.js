import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { pages } from './data';
import './index.scss';


function BasicExample() {
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='navbar-brand' href="/homepage">Healthy Nutrition Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end '>
          
          <Nav className='navbar-list'>
               {pages.map((page) => (
                 <Nav.Link href={page.link} key={page.id}
                 className='navbar-list-item'
                
                 >
                   {page.text}
                 </Nav.Link>
               ))}
             </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
