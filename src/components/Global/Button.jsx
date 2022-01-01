import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <div>{children}</div>;
};

const StyledBtn = styled.div`
  display: block;
  padding: 1.5rem 1rem;
  background: linear-gradient(270deg, #f46737 0%, #945dd6 100%) " : "
    linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export default Button;
