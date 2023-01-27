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
            <PersonalInfoContainer>
                <PersonalInfoParagraph>
                    <SpanHeading>
                        MCA:
                    </SpanHeading>
                    <SpanText>
                        (2023)-Rajdhani Engineering College, BBSR
                    </SpanText>
                </PersonalInfoParagraph>
                <PersonalInfoParagraph>
                    <SpanHeading>
                        MSCS:
                    </SpanHeading>
                    <SpanText>
                        (2024)-Odisha State Open Univerisity, Sambalpur
                    </SpanText>
                </PersonalInfoParagraph>
                <PersonalInfoParagraph>
                    <SpanHeading>
                        BCA:
                    </SpanHeading>
                    <SpanText>
                        (2017)-Govt. Autonomous College, Bhawanipatna
                    </SpanText>
                </PersonalInfoParagraph>
                <PersonalInfoParagraph>
                    <SpanHeading>
                        12th:
                    </SpanHeading>
                    <SpanText>
                        (2014)-Govt. Junior College, Bhawanipatna
                    </SpanText>
                </PersonalInfoParagraph>
            </PersonalInfoContainer>
        </ContainerDiv>
    );
}

export default Education;