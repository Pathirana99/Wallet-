import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navigationbar.css';

export default function NavigationBar() {
  return (
        <Navbar className="custom-navbar">
          <Container className="justify-content-center">
            <Navbar.Brand className="wallet">Wallet</Navbar.Brand>
          </Container>
        </Navbar>
    );
}
