import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
  margin: 3rem 0 6rem;
  display: flex;
  flex-direction: column;
`;
export const ProjectContainer = styled.div`
  margin: 3rem 0;
  padding: 3rem;
  display: flex;
  border-radius: 0.5rem;
  color: #000;
  background-color: #f0ece3;
  ${(props) =>
    props.theme.theme === "dark" &&
    css`
      background-color: #fff;
    `}

  gap: 2rem;
  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
  &:nth-of-type(2n + 1) {
    flex-direction: row;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
`;
export const ProjectContent = styled.div`
  width: 50%;
  h3 {
    margin-bottom: 4rem;
  }
  p {
    margin-bottom: 3rem;
    line-height: 1.3;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectImg = styled.img`
  width: 50%;
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  Button:first-child {
    margin-right: 2rem;
  }
`;
