import { Container } from "GlobalStyled";
import React from "react";
import {
  AboutMeContainer,
  Description,
  Profile,
  Skill,
  SkillContainer,
  SkillImage,
  Title,
} from "./StyledAboutMe";
import html5 from "asset/img/html5.png";
import css3 from "asset/img/css3.png";
import js from "asset/img/js.png";
import reactjs from "asset/img/reactjs.png";
import redux from "asset/img/redux.png";
import tailwind from "asset/img/tailwind-css.png";
import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <Element name="about-me">
      <Container>
        <h2>About Me</h2>
        <AboutMeContainer>
          <Profile data-aos="flip-right">
            <Title>Introduction</Title>
            <Description>
              I am fourth-year student at Danang University of Science and Technology. My
              major is Information and Technology. I'm a front-end developer. Beside
              coding, I like to watch anime, watch soccer and play games. Keeping learning
              and learning in order that I can be a professional developer.
            </Description>
          </Profile>
          <Skill>
            <Title data-aos="zoom-out">Skills</Title>
            <SkillContainer>
              <SkillImage data-aos="fade-left" src={html5} alt="" />
              <SkillImage data-aos="fade-left" data-aos-delay="200" src={css3} alt="" />
              <SkillImage
                data-aos="fade-left"
                data-aos-delay="500"
                src={tailwind}
                alt=""
              />
              <Description data-aos="zoom-out">
                Basic knowledge at Html, Css and TailwindsCss
              </Description>
            </SkillContainer>
            <SkillContainer>
              <SkillImage src={js} alt="" data-aos="fade-right" />
              <Description data-aos="zoom-in">
                Basic Js concepts, ES6 features: Destructuring, Arrow Function, ...
              </Description>
            </SkillContainer>
            <SkillContainer>
              <SkillImage src={reactjs} alt="" data-aos="fade-left" />
              <Description data-aos="zoom-out">
                Library: A little Reactjs, React Hooks( useState, useEffect, useRef)
              </Description>
            </SkillContainer>
            <SkillContainer>
              <SkillImage src={redux} alt="" data-aos="fade-right" />
              <Description data-aos="zoom-in">
                Global State Manager: Redux and Redux Toolkit(learning)
              </Description>
            </SkillContainer>
          </Skill>
        </AboutMeContainer>
      </Container>
    </Element>
  );
};

export default AboutMe;
