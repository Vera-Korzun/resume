import React from "react";
import Summary from "./summary/Summary";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import MainWrapper from "./MainStyled";

const Main = () => {
  return (
    <MainWrapper>
      <Summary />
      <Projects />
      <Experience />
      <Education />
    </MainWrapper>
  );
};

export default Main;
