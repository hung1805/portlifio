import { Button, Container } from "GlobalStyled";
import React from "react";
import {
  BtnGroup,
  ProjectContainer,
  ProjectContent,
  ProjectImg,
  ProjectsContainer,
} from "./StyledProject";
import { projects } from "data";
import { Element } from "react-scroll";

const Project = () => {
  return (
    <Element name="projects">
      <Container>
        <h2>My Projects</h2>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectContainer
              key={project.name}
              data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
            >
              <ProjectImg src={project.image} alt={project.name} />
              <ProjectContent data-aos-delay="300">
                <h3 data-aos="fade-down" data-aos-delay="100">
                  {project.name}
                </h3>
                <p data-aos="fade-down" data-aos-delay="1000">
                  {project.desc}
                </p>
                <p data-aos="fade-down" data-aos-delay="2000">
                  {project.learning}
                </p>
                <BtnGroup>
                  <Button data-aos="zoom-in" data-aos-delay="2500">
                    <a href={project.link_demo}>Demo</a>
                  </Button>
                  <Button data-aos="zoom-out" data-aos-delay="2500">
                    <a href={project.link_code}>Code</a>
                  </Button>
                </BtnGroup>
              </ProjectContent>
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      </Container>
    </Element>
  );
};

export default Project;
