import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorModeContext } from "../theme"; 
import { useLanguage } from '../contexts/LanguageContext';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
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
  color:inherit;  
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    font-weight: bold;
  }

  &.active {
    color: ${(props) => props.theme.hoverColor};
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
  color: inherit ;
  &:hover {
    color: ${(props) => props.theme.primaryColor}; 
    font-weight: bold;
  }
`;

function NavBar2({ theme }) {
  const { setLanguage } = useLanguage();
  const { toggleColorMode } = useContext(ColorModeContext);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <StyledNavBar backgroundColor={theme.backgroundColor}>
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
              <LanguageLink to="#" onClick={() => switchLanguage('se')}>Svenska nyheter</LanguageLink>
              <LanguageLink to="#" onClick={() => switchLanguage('ae')}> أخبار عربية</LanguageLink>
            </LanguageLinks>
          </NavList>
        </div>
      </Container>
    </StyledNavBar>
  );
}

export default NavBar2;
