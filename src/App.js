import styled from 'styled-components';

import NavBar from './components/NavBar';
import LikeWhatYouSee2 from './components/LikeWhatYouSee2';
import NavTabs from './components/NavTabs';
import LikeWhatYouSee1 from './components/LikeWhatYouSee1';
import Section from './components/Section';
import CoursesWeLoved from './components/Highlights';
import ExploreClubs from './components/ExploreClubs';
import StaffCredits from './components/StaffCredits';
import { device } from './device';

const FirstFold = styled.div`
  display: flex;
  margin-top: -2rem;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MainImage = styled.img`
  width: 100%;

  @media ${device.tablet} {
    width: 60%;
  }
`;

const Ad = styled.img`
  margin: 0 2rem;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

function App() {
  return (
    <div className="App">
        <NavBar />
        <FirstFold>
          <NavTabs />
          <MainImage src="https://cds-static-hosting.s3.amazonaws.com/NSOP-ILLO.png"></MainImage>
          <a href="https://212west72.com/the-building?utm_source=ColumbiaSpectator&utm_medium=columbiaspectator&utm_campaign=Columbia%20Spectator%20Banners" target="_blank">
            <Ad src="https://s0.2mdn.net/10483125/212W72_061521_300x600.gif"></Ad>
          </a>
        </FirstFold>
        <LikeWhatYouSee1 />
        <Section sectionName="COVID-19" />
        <Section sectionName="Student Life" />
        <CoursesWeLoved />
        <Section sectionName="Academics" />
        <Section sectionName="City" />
        <ExploreClubs />
        <LikeWhatYouSee2/>
        <StaffCredits />
    </div>
  );
}

export default App;
