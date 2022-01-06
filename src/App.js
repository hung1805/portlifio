import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Project from "components/Projects";
import Contact from "Contact";
import React, { useState, useEffect, createContext } from "react";
import ScrollBtn from "components/ScrollBtn";
import AboutMe from "components/AboutMe";
import GlobalStyle from "GlobalStyled";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "styled-components";
import Social from "components/Social";

const ScrollContext = createContext();
const App = () => {
  AOS.init({
    duration: 1000,
    throttleDelay: 200,
    easing: "ease-in-out",
  });
  const [isScroll, setIsScroll] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScroll(true);
      } else setIsScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <ScrollContext.Provider value={{ isScroll, setIsScroll }}>
      <ThemeProvider theme={{ theme, setTheme }}>
        <GlobalStyle />
        <Header />
        <Hero isScroll={isScroll} />
        <AboutMe />
        <Project />
        <Contact />
        <Social />
        <ScrollBtn isScroll={isScroll} />
        <Footer />
      </ThemeProvider>
    </ScrollContext.Provider>
  );
};

export { ScrollContext };
export default App;
