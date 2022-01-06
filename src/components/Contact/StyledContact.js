import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ContactItem = styled.div`
  margin: 6rem 0;
  padding: 8rem 2rem;
  text-align: center;
  border: 0.1rem solid ${(props) => props.theme.color};
  border-radius: 0.5rem;
  .icon {
    font-size: 3rem;
    padding: 2rem;
    border: 1px dotted ${(props) => props.theme.color};
    border-radius: 50%;
  }

  h4 {
    margin: 2rem 0;
  }
  p {
    display: block;
  }
  @media screen and (max-width: 768px) {
    margin: 1rem 0;
    padding: 2rem 1rem;
  }
`;
