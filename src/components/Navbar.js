import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
    background-color:black;
    display:flex;
    color:white;
    justify-content:center;
`;

const ListItem = styled.li`
    display:inline;
    list-style-type:none;
    margin-left:10px;
    font-family:roboto;
`;
const TitleHeading = styled.h1`
    font-size:30px;
    display:inline;
    margin:0px;
    padding:0px;
    margin-right:60px;
`;

const Navbar = ()=>{
    return(
        <>
   <NavContainer>
   <TitleHeading>My Resume</TitleHeading>
        <ul>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Skill</ListItem>
            <ListItem>Experience</ListItem>
            <ListItem>Education</ListItem>
        </ul>
    </NavContainer>
    </>
    );
}

export default Navbar;