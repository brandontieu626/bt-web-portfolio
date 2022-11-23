import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm Brandon
      </SectionTitle>
      <SectionText>
        I'm a software engineer passionate about creating <br/>
        applications that provide users a great experience. 
      </SectionText>
      <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;