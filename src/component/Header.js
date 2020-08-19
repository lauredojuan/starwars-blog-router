import React, { Component } from "react";
import { Nav, Form, FormControl, Navbar } from "react-bootstrap";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTumblr,
  FaSearch,
} from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#">
              <FaYoutube color="white" size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaTwitter color="white" size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaFacebook color="white" size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaInstagram color="white" size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaTumblr color="white" size="1.5rem" />
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              id="inlineFormInputGroup"
              placeholder="Search Star Wars"
            />
          </Form>
          <Nav.Link href="#">
            <FaSearch color="white" size="1.5rem" />
          </Nav.Link>
        </Navbar>
        <div className="logo">
          <img
            src="https://dx35vtwkllhj9.cloudfront.net/disney/star-wars-the-force-awakens/images/regions/es/tt.png"
            alt="StarWarsLogo"
          />
        </div>
      </>
    );
  }
}
