import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import styled from "styled-components";
import ProfessionalSkills from "../components/ProfessionalSkills";
import Experience from "../components/Experience";

const MainDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const HomePage = ()=>{
    return(<>
        <Navbar />
        <MainDiv>
        <About />
        <ProfessionalSkills />
        <Experience />
        </MainDiv>
    </>);
}

export default HomePage;