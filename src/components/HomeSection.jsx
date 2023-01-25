import React from "react";
import styled from "styled-components";

const HomeSectionComponent = styled.div`
  // background-color: red; 
  max-width: 1300px;
  overflow: auto hidden;
  // display: flex;
  column-gap: 20px;
  margin: 20px auto 20px auto;
  scroll-behavior: smooth;
  justify-content: center;
`;

const SectionHeading = styled.div`
max-width: 1300px;
// background-color: red;
display: flex;
margin: 16px auto 16px auto;
// justify-content: center;
color: rgb(28, 28, 28);
font-size: 24px;
font-weight: 600;
line-height: 32px;
`;

const HomeSection = ({ children , heading}) => {
  return <HomeSectionComponent>
    <SectionHeading>
      {heading}
    </SectionHeading>
    {children}
    </HomeSectionComponent>;
};

export default HomeSection;
