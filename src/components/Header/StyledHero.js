import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledFaBars = styled.button`
  color: #197ae8;
  background-color: transparent;
  border: 0;
  font-size: 1.5rem;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 600;
  text-decoration: underline;
`;
export const ThemeBtn = styled.button`
  display: flex;
  margin-right: 1rem;
  padding: 1rem 1.5rem;
  border: 0;
  border-radius: 1.5rem;
`;

export const StyledButton = styled.button`
  display: block;
  padding: 0.8rem 2rem;
  background: linear-gradient(to right, #995de0, #16accc);
  border: 0;
  border-radius: 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
`;
