import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Knowledge from "components/Knowledge";
import Project from "components/Projects";
import Contact from "Contact";
import React, { useState, useEffect, useContext, createContext } from "react";
import ScrollBtn from "ScrollBtn";
import styled from "styled-components";

const App = () => {
  const [myTheme, setMyTheme] = useState();

  useEffect(() => {
    // console.log("create theme in App with", myTheme);
  }, [myTheme]);

  return (
    <StyledApp>
      <Header />
      <Hero />
      <Knowledge />
      <Project />
      <Contact />
      <ScrollBtn />
      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export default App;
