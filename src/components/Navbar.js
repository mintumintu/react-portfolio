import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
    background-color:black;
    display:flex;
    color:white;
`;

const ListItem = styled.li`
    display:inline;
    list-style-type:none;
    margin-left:10px;
    font-family:roboto;
`;

const Navbar = ()=>{
    return(
        <>
   <NavContainer>
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