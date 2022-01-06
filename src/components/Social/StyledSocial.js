import styled from "styled-components";

export const StyledSocial = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 1rem 0;
  border: 0.2rem solid #14279b;
  border-radius: 0.5rem;
  .socialIcon {
    font-size: 2.5rem;
    margin: 1rem;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
