import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';

export default function WelcomeHeader({ title, imageSrc  }) {

  // for navigation to sections when clicking on navbar 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Container>
      <ContentWrapper>
        {/* Grid Layout */}
        <GridContainer>
          {/* Left Column - Placeholder */}
          <ImagePlaceholder src={imageSrc} />
          
          {/* Right Column - Content */}
          <ContentColumn>
            <Title>{title}</Title>
            
            <TextContent>
              <p>Dear Reader,</p>
              
              <p>
              It’s that time of year again—alumni and parents flood onto campus and Columbia students make their annual trek up 
              to Wien Stadium by shuttle bus or subway. For one weekend, we embrace the spirit of sports and the ways it can 
              bring us together in celebration and community. 

              </p>
              
              <p>
              However, it’s not always easy to be a Columbia football fan. While the Lions have tumbled up and down the 
              Ivy League standings over the last decade, there have been, <space></space>
                <a href="https://www.columbiaspectator.com/sports/2023/10/14/the-day-columbia-discovered-school-spirit-a-look-back-at-columbias-wildest-homecoming-celebration/" target="_blank" rel="noopener noreferrer">famously</a>, 
              straight seasons where the 
              team didn’t win at all.
              
              </p>
              
              <p>
                
              There was a moment last year when it looked like the football team wasn’t going to log a single win in 
              conference play. After legendary head coach Al Bagnoli retired, the future of the program was uncertain. 
              Interim head coach Mark Fabish came and went quickly. Could the Lions really pull themselves out of rock bottom 
              just one season later?
              </p>

              <p>
                
              As we watched Columbia take down Penn last week for its first win at Franklin Field since 1996, the answer, 
              it seemed, was a resounding “yes.” New head coach Jon Poppe might be ushering in a new era of Lions football, 
              and his team has been electric. It’s an effort made possible by new and old faces on the field. In the season opener, 
              sophomore Chase Goodwin stepped up as the new starting quarterback, and he’s already making an impact with 800 
              passing yards and just one interception across four games. Veteran players like senior running backs Malcom Terry II 
              and Joey Giorgi have combined for 768 rushing yards this season.
              </p>

              <p>
              Now tied with Dartmouth atop the conference standings, Columbia’s game this weekend will be a battle of the 
              Ivy League’s best. Whatever the outcome, it’ll be a matchup you won’t want to miss. Even if you don’t consider 
              yourself a sports fan, you can still get in on all the fun—and this edition is a great way to shift into 
              that state of mind. From profiles of the team’s stars to insights on Columbia merch, we hope you’ll enjoy this 
              celebration of Columbia spirit. 
              </p>
            </TextContent>
            
            <SignatureSection>
              <SignatureBlock>
                <SignatureName>Heathen Chen</SignatureName>
                <SignatureTitle>Sports Editor</SignatureTitle>
              </SignatureBlock>
              <SignatureBlock>
                <SignatureName>Isabella Ramírez</SignatureName>
                <SignatureTitle>Editor in Chief</SignatureTitle>
              </SignatureBlock>
              <SignatureBlock>
                <SignatureName>Esha Karam</SignatureName>
                <SignatureTitle>Managing Editor</SignatureTitle>
              </SignatureBlock>
            </SignatureSection>
          </ContentColumn>
        </GridContainer>
        
        {/* Navigation */}
        <Navigation>
          <HomeButton onClick={() => scrollToSection('Sports')}>Home</HomeButton>
          {["Sports", "Student Life", "Academics", "City"].map((section, index) => (
          <SectionButton key={index} onClick={() => scrollToSection(section.toLowerCase().split(" ").join("-"))}>
              {section}
          </SectionButton>
            ))}
        </Navigation>
      </ContentWrapper>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #EBF0F5;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;
  margin-bottom: 10rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    flex-direction:row;
  }
`;

const ImagePlaceholder = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1d1d1;
  margin: 0 auto;
  max-width: 90%;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  100%;
`;

const Title = styled.h1`
  font-family: 'Passion One';
  color: #38319B;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #0F0F0F;
  font-family: Bitter;
  font-style: normal;
  font-weight: 400;
  
  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const SignatureSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 1rem;
`;

const SignatureBlock = styled.div`
  text-align: center;
`;

const SignatureName = styled.p`
  font-style: normal;
  color: #2C2C2C;
  margin: 0;
  font-weight: 400;
  font-family: "Nothing You Could Do";
`;

const SignatureTitle = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: #2C2C2C;
  font-family: Bitter;
`;

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const BaseButton = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-family: 'Patua One';
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HomeButton = styled(BaseButton)`
  background-color: #3A33A0;
  color: white;
  border: none;
  
  &:hover {
    background-color: #1d1858;
  }
`;

const SectionButton = styled(BaseButton)`
  background-color: white;
  color: #3A33A0;
  border: 1px solid transparent;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;