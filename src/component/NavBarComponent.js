import React, { Component } from 'react';


import { Form, Button, FormControl, NavDropdown , Navbar , Nav } from "react-bootstrap";
function NavBar(){
    return (
     <div>
         <Navbar bg="light" expand="lg">
             <Navbar.Brand >Hello Canabis</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/documentation">Documentation</Nav.Link>
                     <Nav.Link href="/contactus">Contact us</Nav.Link>
                 </Nav>

             </Navbar.Collapse>
         </Navbar>
     </div>
    )
}
export default NavBar;
