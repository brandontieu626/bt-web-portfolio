import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './AboutStyles';
import { Section, SectionDivider, SectionTitle, SectionText, Gri } from '../../styles/GlobalComponents'; 
import Profile from './Profile';
import Description from './Description';
const About = () => {
  return (
  <Section nopadding id="about">
    <SectionDivider/>
    <SectionTitle main> About Me </SectionTitle>
    <GridContainer>
      <Profile source='/images/pfp.jpg'/>
      <Description/>
    </GridContainer>

  </Section>)
}

export default About;