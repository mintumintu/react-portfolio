import React from "react";
import {ContainerDiv,AboutHeading,HorizontalLine,AboutParagraph,PersonalInfoContainer,PersonalInfoParagraph,SpanHeading,SpanText} from '../utilities/styles';

function Education(){
    return(
        <ContainerDiv>
            <AboutHeading>
                Education
            </AboutHeading>
            <HorizontalLine />
            <AboutParagraph>
                Here are the details of my education
            </AboutParagraph>
        </ContainerDiv>
    );
}

export default Education;