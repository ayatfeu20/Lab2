import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLanguage } from '../contexts/LanguageContext';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: #000; 
  text-decoration: none;

  &:hover {
    color: #007bff; 
    font-weight: bold;
  }

  &.active {
    color: #007bff; 
    font-weight: bold;
  }
`;

const LanguageLinks = styled.div`
  display: flex;
  align-items: center;
  padding-left:25rem;
`;

const LanguageLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #007bff; 
    font-weight: bold;
  }
`;

function NavBar2() {
    const { setLanguage } = useLanguage();

    const switchLanguage = (lang) => {
       setLanguage(lang);
    };
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
          <NavList className="navbar-nav me-auto">
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
            <LanguageLinks>
        <LanguageLink to="#" onClick={() => switchLanguage('se')}>Svensk nyheter</LanguageLink>
        <LanguageLink to="#" onClick={() => switchLanguage('ae')}> أخبار عربية</LanguageLink>
      </LanguageLinks>
          </NavList>
           

        </div>
      </Container>
    </StyledNavBar>
  );
}

export default NavBar2;
