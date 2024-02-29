import React, { useContext } from "react";
import styled from "styled-components";
import { ColorModeContext } from "../theme"; 
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton } from "@mui/material";

const NavbarContainer = styled.div`
.navbar {
  background-color: ${(props) => props.backgroundColor};
  padding: 5px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

.navbar-brand {
  color: inherit;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  padding-left: 10px;
}

.akhbar {
  background-color: ${(props) => props.secondaryColor};
  color: ${(props) => props.primaryColor};
  padding: 0 3px; 
  border-radius: 7px;
}

.icon {
  color: ${(props) => (props.textColor === "#fff" ? "#fff" : "#000")}; 
  margin-left: auto; 
  padding-right: 10px; 
  cursor: pointer; 
}
`;

function NavBar1({ theme }) {
  const { toggleColorMode } = useContext(ColorModeContext); 

  return (
    <NavbarContainer
      backgroundColor={theme.backgroundColor}
      textColor={theme.textColor}
      secondaryColor={theme.secondaryColor}
      primaryColor={theme.primaryColor}
    >
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="akhbar">AKHBAR</span> news App
          </a>
          </div>
          <div>
          <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
        </div>
      </nav>
    </NavbarContainer>
  );
}

export default NavBar1;
