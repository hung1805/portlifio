import styled, { css } from "styled-components";

export const Nav = styled.nav`
  padding: 1.5rem 8rem;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      background-color: #f0ece3;
      color: #000;
    `}
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledFaBars = styled.button`
  color: #197ae8;
  background-color: transparent;
  border: 0;
  font-size: 3rem;
  line-height: 0;
  margin-right: 1rem;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0.1rem;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  .link {
    cursor: pointer;
    font-size: 1.8rem;
    margin: 0 2rem;
    position: relative;
    &::after {
      transition: all 0.3s;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 0.2rem;
      width: 0%;
      color: transparent;
      background-image: linear-gradient(to right, #995de0, #16accc);
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
    &.active {
      &::after {
        width: 100%;
      }
    }
  }
  .close-icon {
    display: none;
    position: absolute;
    font-size: 2.5rem;
    color: red;
    top: 2rem;
    left: 25vw;
    @media screen and (max-width: 768px) {
      left: 44vw;
    }
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: -1.5rem;
    left: 0;
    width: 30vw;
    height: 100vh;
    z-index: 4;
    padding: 2rem 0;
    flex-direction: column;
    background-color: #fff;
    align-items: flex-start;
    transition: all 700ms ease-in-out;
    transform: translateX(-30vw);
    li {
      padding: 1.5rem 0;
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -1.5rem;
    left: 0;
    width: 50vw;
    height: 100vh;
    z-index: 4;
    padding: 2rem 0;
    flex-direction: column;
    background-color: #fff;
    align-items: flex-start;
    transition: all 700ms ease-in-out;
    transform: translateX(-50vw);
    li {
      padding: 1.5rem 0;
    }
    .close-icon {
      display: block;
    }
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 4rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  text-decoration: underline;
  @media screen and (max-width: 450px) {
    font-size: 3rem;
  }
`;
export const ThemeBtn = styled.button`
  position: relative;
  display: flex;
  margin-right: 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 0;
  border-radius: 2.5rem;
  cursor: pointer;
  outline: none;
  background-color: #f4dfba;
  ${(props) =>
    props.theme.theme === "dark" &&
    css`
      background-color: #449ced;
    `}
  .sunIcon {
    margin-right: 0.5rem;
    color: red;
  }
  .moonIcon {
    color: yellow;
  }
  &::after {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    content: "";
    background-color: #21b9af;
    border-radius: inherit;
    transition: all 500ms ease-in-out;
    ${(props) =>
      props.theme.theme === "dark" &&
      css`
        left: 0;
      `}
  }
`;
