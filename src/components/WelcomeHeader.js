import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';

export default function WelcomeHeader({ title = "HOMECOMING 2024" }) {
  return (
    <Container>
      <ContentWrapper>
        {/* Grid Layout */}
        <GridContainer>
          {/* Left Column - Placeholder */}
          <ImagePlaceholder />
          
          {/* Right Column - Content */}
          <ContentColumn>
            <Title>{title}</Title>
            
            <TextContent>
              <p>Dear Reader,</p>
              
              <p>
              Welcome to Columbia! As you immerse yourself in the University community and settle into your new home, 
              you will encounter a campus facing a pivotal moment in its history as you, too, undergo significant change. 
              You probably have lots of lingering questions about what the years ahead will look like and how to navigate all 
              of Columbia’s different facets. Inside this special issue, you will find everything we at Spectator think 
              first-year students should know as you acquaint yourself with campus life.

              </p>
              
              <p>
              Spectator is a financially independent nonprofit organization and the largest student-run news media group on campus, 
              serving tens of thousands of readers across Columbia, Morningside Heights, and West Harlem. We have a 148-year 
              tradition of documenting history as it unfolds through in-depth, well-reported stories that hold institutional 
              power to account.
              </p>
              
              <p>
                Joining Spec is one of the best ways to kick off your four years at Columbia. When you 
                become a member of the Spec family, nestled in our office in Riverside Church, you step into 
                a community of sharp and passionate students who care deeply about the work they do. Joining Spec
                is one of the best ways to kick off your four years at Columbia. When you become a member of the Spec
                family, nestled in our office in Riverside Church.
              </p>
            </TextContent>
            
            <SignatureSection>
              <SignatureBlock>
                <SignatureName>First Last</SignatureName>
                <SignatureTitle>Editor in Chief</SignatureTitle>
              </SignatureBlock>
              <SignatureBlock>
                <SignatureName>First Last</SignatureName>
                <SignatureTitle>Managing Editor</SignatureTitle>
              </SignatureBlock>
            </SignatureSection>
          </ContentColumn>
        </GridContainer>
        
        {/* Navigation */}
        <Navigation>
          <HomeButton>Home</HomeButton>
          {['Section', 'Section', 'Section', 'Section'].map((section, index) => (
            <SectionButton key={index}>{section}</SectionButton>
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
  padding: 6rem 1rem 2rem 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;
  margin-bottom: 10rem;
  
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #d1d1d1;
  height: 100%;
  width: 60%;
  margin: 0 auto;
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
  gap: 0.5rem;
  justify-content: center;
`;

const BaseButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-family: 'Noto Sans', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const HomeButton = styled(BaseButton)`
  background-color: #2d2678;
  color: white;
  border: none;
  
  &:hover {
    background-color: #1d1858;
  }
`;

const SectionButton = styled(BaseButton)`
  background-color: white;
  color: #2d2678;
  border: 1px solid #2d2678;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;