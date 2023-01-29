import styled from 'styled-components'

const ContainerDiv = styled.div`
    width:50%;
    border:1px solid black;
    padding:5px;
    margin-top:10px;
    background:white;
    border-radius:10px;
`;

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

export {ContainerDiv,AboutHeading,HorizontalLine,AboutParagraph,PersonalInfoContainer,PersonalInfoParagraph,SpanHeading,SpanText};