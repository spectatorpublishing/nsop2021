import styled from 'styled-components';

import NavBar from './components/NavBar';
import LikeWhatYouSee2 from './components/LikeWhatYouSee2';
import NavTabs from './components/NavTabs';
import LikeWhatYouSee1 from './components/LikeWhatYouSee1';
import Section from './components/Section';
import CoursesWeLoved from './components/CoursesWeLove';

const FirstFold = styled.div`
  display: flex;
`;

const MainImage = styled.img`
  width: 60%;
`;

const Ad = styled.img`
  margin: 0 2rem;
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
        <CoursesWeLoved/>
        <Section sectionName="Academics" />
        <Section sectionName="COVID-19" />
        <Section sectionName="Student Life" />
        <Section sectionName="Explore Housing" />
        <LikeWhatYouSee2/>
    </div>
  );
}

export default App;
