import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  margin: 3rem 0 6rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    p {
      margin: 0;
    }
  }
`;

export const Skill = styled.div`
  width: 60%;
  padding-left: 15rem;
  @media screen and (max-width: 1120px) {
    padding-left: 10rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const Profile = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SkillContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 1120px) {
    margin-top: 0;
  }
`;
export const Title = styled.h3`
  padding: 2rem 0 1rem;
`;
export const Description = styled.p`
  line-height: 2.2;
`;
export const SkillImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  background-color: transparent;
  object-fit: contain;
`;
