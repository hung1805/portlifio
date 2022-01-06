import styled, { css } from "styled-components";

export const StyledScrollBtn = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 2;
  color: #fff;
  ${(props) =>
    props.theme.theme === "dark" &&
    css`
      color: #000;
    `}
  background-color: #1c6dd0;
  font-size: 2rem;
  border: 0;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon1 {
    opacity: 1;
    transition: all ease-in-out 700ms;
    transform: translateY(0);
  }
  .icon2 {
    margin-bottom: -2rem;
    opacity: 0;
    transition: all ease-in-out 700ms;
    transform: translateY(100%);
  }
  &:hover {
    .icon1 {
      transform: translateY(-100%);
      opacity: 0;
    }
    .icon2 {
      transform: translateY(0);
      opacity: 1;
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
