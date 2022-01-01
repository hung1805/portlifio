import React from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import {
  Nav,
  NavBtn,
  StyledFaBars,
  StyledButton,
  Logo,
  ThemeBtn,
  NavList,
} from "./StyledHero";

const Header = () => {
  return (
    <div>
      <Nav>
        <StyledFaBars>
          <FaBars />
        </StyledFaBars>
        <Logo>Portlifio</Logo>
        <NavList>
          <li>About Me</li>
          <li>Project</li>
          <li>Contact</li>
        </NavList>
        <NavBtn>
          <ThemeBtn>
            <FaSun style={{ marginRight: "0.5rem" }} />
            <FaMoon />
          </ThemeBtn>
          <StyledButton>Resume</StyledButton>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Header;
