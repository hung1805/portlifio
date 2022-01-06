import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    @media screen and (max-width: 1120px) {
      font-size: 55%;
    }
    @media screen and (max-width: 768px) {
      font-size: 50%;
    }
  }
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: #fff;
    ${(props) =>
      props.theme.theme === "dark" &&
      css`
        background-color: #000;
      `};
    color: #000;
    ${(props) =>
      props.theme.theme === "dark" &&
      css`
        color: #fff;
      `};
    line-height: 1;
    transition: all .5s linear;
    h2 {
    margin: 0;
    font-size: 4.5rem;
    font-weight: 500;
    }
    h3 {
      margin: 0;
      font-size: 2.8rem;
      font-weight: 400;
    }
    h4 {
      font-size: 2rem;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 1.8rem;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    
  }
`;
export default GlobalStyle;

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 8rem;
  overflow: hidden;
  h2 {
    text-decoration: underline;
  }
  p {
    margin: 3rem 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0 3rem;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(to right, #995de0, #16accc);
  border: 0;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  opacity: 0.8;
  .icon {
    margin-left: 0.3rem;
  }
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 450px) {
    padding: 1.2rem 1.8rem;
  }
`;
