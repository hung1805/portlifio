import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 16rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const HeroContent = styled.div`
  width: 51%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const HeroImgContainer = styled.div`
  width: fit-content;
  .hero--img {
    height: min-content;
    width: 100%;
    max-width: 50rem;
  }
  @media screen and (max-width: 1024px) {
    .hero--img {
      max-width: 35rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSpan = styled.span`
  color: blue;
  font-weight: 600;
`;

export const StyledHeading = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  .typewriter h1 {
    color: #000;
  }
`;
