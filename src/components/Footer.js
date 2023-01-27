import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h2 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-10px",
                   marginBottom: "30px" }}>
        Senior Services: A Commuity for You
      </h2>
      <Container>
        <Row>
        <Column>
        <Link to={`/`}>
          <FooterLink>Home</FooterLink>
        </Link>
          </Column>
          
          <Column>
          <Link to={`/about`}>
            <FooterLink>About</FooterLink>
          </Link>
          </Column>

          <Column>
            <Link to="/events">
              <FooterLink>Events</FooterLink>
            </Link>
           
          </Column>
          <Column>
            <Link to="/connect">
            <FooterLink>Contact Us</FooterLink>
            </Link>
          </Column>
    
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;