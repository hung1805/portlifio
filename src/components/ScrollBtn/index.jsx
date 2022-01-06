import React from "react";
import { FaArrowUp, FaChevronUp } from "react-icons/fa";
import { StyledScrollBtn } from "./StyledScrollBtn";

const ScrollBtn = (props) => {
  const { isScroll } = props;
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isScroll && (
        <StyledScrollBtn onClick={handleScrollToTop}>
          <FaChevronUp className="icon1" />
          <FaArrowUp className="icon2" />
        </StyledScrollBtn>
      )}
    </>
  );
};

export default ScrollBtn;
