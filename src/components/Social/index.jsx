import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StyledSocial } from "./StyledSocial";

const Social = () => {
  return (
    <StyledSocial>
      <a href="https://www.linkedin.com/in/%C4%91inh-tr%E1%BB%8Dng-h%C3%B9ng-321395225/">
        <FaLinkedin className="socialIcon" style={{ color: "blue" }} />
      </a>
      <a href="https://github.com/hung1805">
        <FaGithub className="socialIcon" />
      </a>
      <a href="https://www.facebook.com/tronghung.dinh.336/">
        <FaFacebook className="socialIcon" style={{ color: "blue" }} />
      </a>
      <a href="https://www.instagram.com/sowhoia.m/">
        <FaInstagram className="socialIcon" style={{ color: "#FF0075" }} />
      </a>
    </StyledSocial>
  );
};

export default Social;
