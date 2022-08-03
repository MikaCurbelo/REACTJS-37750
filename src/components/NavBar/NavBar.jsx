/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import './NavBar.css';




export const NavBar = () => {
  return (
    <div>
      <Navbar className="backNav">
        <Container className="icono">
          <Link to={"/"} className="logo">
                <GiMusicalNotes/>
                  <h1>CLASES DE MÚSICA</h1>
                <GiMusicalNotes/>
          </Link> 
          <div>
            {/* <Navbar.Toggle/> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="dropDown">
                <NavDropdown title="Cursos" id="basic-nav-dropdown">
                  <NavDropdown.Item className="backNav" value="Piano"><Link className="links" to={"category/teclados"}>Teclados</Link></NavDropdown.Item>
                  <NavDropdown.Item className="backNav" value="Batería"><Link className="links" to={"category/percusion"}>Percusion</Link></NavDropdown.Item>
                  <NavDropdown.Item className="backNav" value="Guitarra"><Link className="links" to={"category/cuerdas"}>Cuerdas</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <div className="espacio backNav"><CartWidget/></div>

    </div>
  )
}
