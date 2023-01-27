import React from "react";
import styled from "styled-components";
import { ContainerDiv } from "../utilities/styles";

const AboutHeading= styled.h2`
    font-size:20px;
    text-transform:uppercase;
`;

const HorizontalLine = styled.hr`
    width:100%;
    height:5px;
    background:blue;
`;

const AboutParagraph = styled.p`
    
`;

const PersonalInfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin:1px;
`;

const PersonalInfoParagraph = styled.p`
    width:50%;
    margin:3px;
`;

const SpanHeading = styled.span`
    text-transform:uppercase;
    font-weight:bold;
`;

const SpanText = styled.span`

`;


function About (){
    return(
        <ContainerDiv>
        <AboutHeading>About</AboutHeading>
        <HorizontalLine />
        <AboutParagraph>
        Hello i am Jogendra Pattnaik, an aspiring web developer. i mainly use the MERN Stack as my 
        Developement environment for developing fullstack applications.
        </AboutParagraph>
        <AboutHeading>Personal Info</AboutHeading>
        <HorizontalLine/>
        <PersonalInfoContainer>
        <PersonalInfoParagraph>
        <SpanHeading>
        Address:
        </SpanHeading>
        <SpanText>
        Bhawanipatna
        </SpanText>
        </PersonalInfoParagraph>
        <PersonalInfoParagraph>
        <SpanHeading>
        Main Language:
        </SpanHeading>
        <SpanText>
        English
        </SpanText>
        </PersonalInfoParagraph>
        </PersonalInfoContainer>
        <PersonalInfoContainer>
        <PersonalInfoParagraph>
        <SpanHeading>
        Email:
        </SpanHeading>
        <SpanText>
        Jogendrapattnaik4@gmail.com
        </SpanText>
        </PersonalInfoParagraph>
        <PersonalInfoParagraph>
        <SpanHeading>
        Second Language:
        </SpanHeading>
        <SpanText>
        Hindi
        </SpanText>
        </PersonalInfoParagraph>
        </PersonalInfoContainer>
        <PersonalInfoContainer>
        <PersonalInfoParagraph>
        <SpanHeading>
        Phone:
        </SpanHeading>
        <SpanText>
        9776046372
        </SpanText>
        </PersonalInfoParagraph>
        <PersonalInfoParagraph>
        <SpanHeading>
        Third Language:
        </SpanHeading>
        <SpanText>
        Odia
        </SpanText>
        </PersonalInfoParagraph>
        </PersonalInfoContainer>
        </ContainerDiv>
    );
}

export default About;