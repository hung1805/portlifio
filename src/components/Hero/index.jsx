import { ReactComponent as HeroImg } from "asset/img/hero_img.svg";
import { Button, Container } from "GlobalStyled";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";
// import TypeWriterEffect from "react-typewriter-effect";
import {
  HeroContainer,
  HeroContent,
  HeroImgContainer,
  StyledHeading,
} from "./StyledHero";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroContent>
          <StyledHeading>
            <Typewriter
              className="typewriter"
              options={{
                cursor: "_",
                loop: true,
                autoStart: true,
                deleteSpeed: 200,
                strings: ["Hi, I am Hung", "I'm a front-end web developer"],
              }}
              onInit={(typewriter) => {
                typewriter.typeString().pauseFor(1000).deleteAll().start();
              }}
            />
            {/* <TypeWriterEffect
              textStyle={{
                fontSize: "5rem",
                fontWeight: "500",
                fontFamily: "'Roboto', sans-serif",
              }}
              startDelay={100}
              cursorColor="blue"
              text={`Hi, I am Hung`}
              typeSpeed={150}
              hideCursorAfterText={true}
            />
            <TypeWriterEffect
              textStyle={{
                fontSize: "3rem",
                fontWeight: "500",
                fontFamily: "'Roboto', sans-serif",
                marginTop: "2rem",
              }}
              startDelay={2500}
              cursorColor="blue"
              text={"I'm a front-end web developer 💻"}
              typeSpeed={100}
              hideCursorAfterText={true}
            /> */}
          </StyledHeading>
          <Button>
            <Link to="about-me" duration={1000} offset={-150} smooth={true} spy={true}>
              Learn More <FaLongArrowAltRight className="icon" />
            </Link>
          </Button>
        </HeroContent>
        <HeroImgContainer>
          <HeroImg className="hero--img" />
        </HeroImgContainer>
      </HeroContainer>
    </Container>
  );
};

export default Hero;
