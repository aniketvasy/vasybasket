import React from "react";
import styled from "styled-components";

const HomeSectionComponent = styled.div`
  background-color: #fcfcfc;
`;

const HomeSection = ({ children }) => {
  return <HomeSectionComponent>{children}</HomeSectionComponent>;
};

export default HomeSection;
