import React from "react";
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
            
            <FooterLink href="#/home">Home</FooterLink>
        
          </Column>
          <Column>
            
            <FooterLink href="#/about">About</FooterLink>
        
          </Column>
          <Column>

            <FooterLink href="#/events">Events</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
    
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;