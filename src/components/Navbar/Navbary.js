import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Navbary extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/img/logo1.jpg'}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/information">Information</Link></Nav.Link>
      <Nav.Link><Link to="/photo">Photo</Link></Nav.Link>
      <Nav.Link><Link to="/video">Video</Link></Nav.Link>

    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>
    );
  }
}
