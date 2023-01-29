import React from 'react'
import styled from 'styled-components';
import profileimage from '../profileimage.JPG'

const ProfileDiv = styled.div`
    border:2px solid black;
    margin-right:20px;
    background:white;
    margin-left:100px;
    margin-top:11px;
`;


function ProfileImage(){
    return(
    <ProfileDiv>
        <img src={profileimage} height={270} width={250} alt='profile' style={{marginTop:'11px'}}/>
    </ProfileDiv>
        );
}

export default ProfileImage;