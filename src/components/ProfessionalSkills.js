import React from 'react'
import {ContainerDiv,AboutHeading,HorizontalLine,AboutParagraph,PersonalInfoContainer,PersonalInfoParagraph,SpanHeading,SpanText} from '../utilities/styles';
function ProfessionalSkills (){
    return(
       <ContainerDiv>
    <AboutHeading>ProfessionalSkills</AboutHeading>
        <HorizontalLine/>
        <AboutParagraph>
            Here are my set of Skills i know and i use for fullstack web Developement.
        </AboutParagraph>
        <PersonalInfoContainer>
            <PersonalInfoParagraph>
                <SpanHeading>
                    HTML:
                </SpanHeading>
                <SpanText>
                    Structure, Formatting, Table, Form
                </SpanText>
            </PersonalInfoParagraph>
            <PersonalInfoParagraph>
                <SpanHeading>
                    CSS:
                </SpanHeading>
                <SpanText>
                    position,formatting,animation,layout
                </SpanText>
            </PersonalInfoParagraph>
        </PersonalInfoContainer>
        <PersonalInfoContainer>
            <PersonalInfoParagraph>
                <SpanHeading>
                    JavaScript:
                </SpanHeading>
                <SpanText>
                    language,functions,ES6
                </SpanText>
            </PersonalInfoParagraph>
            <PersonalInfoParagraph>
                <SpanHeading>
                    PHP:
                </SpanHeading>
                <SpanText>
                    form handling,file handling,database
                </SpanText>
            </PersonalInfoParagraph>
        </PersonalInfoContainer>
        <PersonalInfoContainer>
            <PersonalInfoParagraph>
                <SpanHeading>
                    Reactjs:
                </SpanHeading>
                <SpanText>
                    components, props,state, hooks
                </SpanText>
            </PersonalInfoParagraph>
            <PersonalInfoParagraph>
                <SpanHeading>
                    Nodejs:
                </SpanHeading>
                <SpanText>
                    form handling, file handling, database
                </SpanText>
            </PersonalInfoParagraph>
        </PersonalInfoContainer>
       </ContainerDiv>
    );
}

export default ProfessionalSkills;