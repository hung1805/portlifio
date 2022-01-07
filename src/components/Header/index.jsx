import { ScrollContext } from "App";
import { Button } from "GlobalStyled";
import React, { useContext, useRef } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { ThemeContext } from "styled-components";
import { Logo, Nav, NavBtn, NavList, StyledFaBars, ThemeBtn } from "./StyledHeader";

const Header = () => {
  const context = useContext(ScrollContext);
  const ref = useRef();
  const { theme, setTheme } = useContext(ThemeContext);

  const closeNavList = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      return (ref.current.style.transform = "translateX(-50vw)");
    } else if (width > 768 && width <= 1024) {
      return (ref.current.style.transform = "translateX(-30vw)");
    } else return;
  };
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  const showNavList = () => {
    ref.current.style.transform = "translateX(0)";
  };
  return (
    <ScrollContext.Consumer>
      {() => (
        <Nav fixed={context.isScroll}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <StyledFaBars onClick={showNavList}>
              <FaBars />
            </StyledFaBars>
            <Logo>
              <a href="/">Portlifio</a>
            </Logo>
          </div>
          <NavList ref={ref}>
            <li>
              <FaTimes className="close-icon" onClick={() => closeNavList()} />
            </li>
            <li>
              <Link
                onClick={() => closeNavList()}
                className="link"
                to="about-me"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={-100}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeNavList()}
                className="link"
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeNavList()}
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </NavList>
          <NavBtn>
            <ThemeBtn onClick={toggleTheme}>
              <FaSun className="sunIcon" />
              <FaMoon className="moonIcon" />
            </ThemeBtn>
            <Button>
              <a href="https://drive.google.com/file/d/1LL9VRCxB_i-DWpK9ieljV0xMVWpxCSaB/view?usp=sharing">
                Resume
              </a>
            </Button>
          </NavBtn>
        </Nav>
      )}
    </ScrollContext.Consumer>
  );
};

export default Header;
