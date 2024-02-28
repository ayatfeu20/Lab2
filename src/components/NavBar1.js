import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  .navbar {
    background-color: #343a40;
  }
  
  .navbar-brand {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    padding-left:10px;
  }
`;


function NavBar1() {
	return (
        <NavbarContainer>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Akhbar news App
            </a>
          </div>
        </nav>
      </NavbarContainer>
	);
}

export default NavBar1;
