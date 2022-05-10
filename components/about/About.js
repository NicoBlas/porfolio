import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ListParagraph } from '../Technologies/TechnologiesStyles';
const About = () => {
  return (
    <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <ListParagraph>
            Hi, i am Nicolas Blasutig, 22 years old developer from Argentina. Passionate for larning something new every day.
            
        </ListParagraph>
        <ListParagraph>
            I speack English and Spanish.   
            
        </ListParagraph>
        <ListParagraph>
            I learned to code in a bootcamp from Digital House and also from my own. College Marketing student as well.
            
        </ListParagraph>
        <ListParagraph>
            In my free time i like going to the Gim, knowing new people, reading about technologie and reaserching the Crypto Market.
            
        </ListParagraph>
        <ListParagraph>
            I am really looking forward to joining a team, add value and learn new things.
            
        </ListParagraph>
        <ListParagraph>
            Feel free to contact me : )
            
        </ListParagraph>
    </Section>
  )
}

export default About