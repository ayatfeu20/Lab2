import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const StyledNavBar = styled.nav`
  background-color: #f8f9fa; 
`;

const Container = styled.div`
  padding: 0 1rem;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
`;

const NavList = styled.ul`
  list-style: none; 
  display: flex;
  align-items: center;
  padding-bottom:10px;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  color: #000; /* Set your desired text color */
  text-decoration: none;

  &:hover {
    color: #007bff; /* Set your desired hover color */
  }

  &.active {
    color: #007bff; /* Set your desired active link color */
    font-weight: bold;
  }
`;

function NavBar2() {
  return (
    <StyledNavBar className="navbar navbar-expand-lg">
      <Container className="container-fluid">
        <ToggleButton
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </ToggleButton>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavList className="navbar-nav">
            <NavItem>
              <NavLink className="nav-link" to={`/`} aria-current="page">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/Entertainment`}>
                Entertainment
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/Technology`}>
                Technology
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/Sports`}>
                Sports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/Business`}>
                Business
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/Health`}>
                Health
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/Science`}>
                Science
              </NavLink>
            </NavItem>
          </NavList>
          <NavList className="navbar-nav">
            <NavItem>
              <NavLink className="nav-link" to="/svenska">
                Svenska
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/arabiska">
                العربية
              </NavLink>
            </NavItem>
          </NavList>   

        </div>
      </Container>
    </StyledNavBar>
  );
}

export default NavBar2;
