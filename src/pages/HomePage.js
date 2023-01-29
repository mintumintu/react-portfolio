import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import styled from "styled-components";
import ProfessionalSkills from "../components/ProfessionalSkills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ProfileImage from "../components/ProfileImage";

const MainDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const RowDiv= styled.div`
    display:flex;
    flex-dirction:row;
`;

const HomePage = ()=>{
    return(<>
        <Navbar />
        <RowDiv>
        <ProfileImage />
        <About />
        </RowDiv>
        <MainDiv>
        <ProfessionalSkills />
        <Experience />
        <Education />
        </MainDiv>
    </>);
}

export default HomePage;