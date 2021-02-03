import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

const Heading = () => {
  return ( 
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add-user" className="btn btn-primary">Add user</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
 
export default Heading;