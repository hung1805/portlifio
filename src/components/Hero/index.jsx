import React from "react";
import Particles from "react-tsparticles";
import { lightOptions, darkOptions } from "./tsPraticles";

const Hero = () => {
  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};
  return (
    <div style={{ position: "absolute", zIndex: "-1" }}>
      <Particles
        style={{ position: "absolute" }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={darkOptions}
      />
    </div>
  );
};

export default Hero;
