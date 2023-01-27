import React from "react";
import {ContainerDiv,AboutHeading,HorizontalLine,AboutParagraph,PersonalInfoContainer,PersonalInfoParagraph,SpanHeading,SpanText} from '../utilities/styles';

function Experience(){
    return(
        <ContainerDiv>
            <AboutHeading>
                Experience
            </AboutHeading>
            <HorizontalLine />
            <AboutParagraph>
                Here is my experience
            </AboutParagraph>
            <PersonalInfoContainer>
                <PersonalInfoParagraph>
                    <SpanHeading>
                        Kalahandi Univeristy
                    </SpanHeading>
                    <SpanText>
                        Teaching Assitant(2 years)
                    </SpanText>
                </PersonalInfoParagraph>
            </PersonalInfoContainer>
        </ContainerDiv>
    );
}

export default Experience;