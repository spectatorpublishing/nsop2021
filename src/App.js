import styled from 'styled-components';


import Section from './components/Section';
import StaffCredits from './components/StaffCredits';
import WelcomeHeader from './components/WelcomeHeader';
import homecomingImage from './homecoming.jpg';
import { device } from './device';

const FirstFold = styled.div`
  display: flex;
  margin-top: -3rem;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MainImage = styled.iframe`
  display: none;

  @media ${device.tablet} {
    display: block;
    width: 60%;
    height: 35rem;
  }
`;

const MobileMainImage = styled.img`
  width: 100%;
  height: 20rem;
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

const Ad = styled.img`
  margin: 0 2rem;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const MobileAd = styled.img`
  margin: 0 2rem;
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

function App() {
  const sectionNames = ["Sports", "City", "Audio", "Crosswords"];

  return (
    <div className="App">
        <WelcomeHeader
          title="HOMECOMING 2024" 
          imageSrc={homecomingImage}
        />
        {/* <FirstFold>
          <NavTabs />
          <MainImage src="https://spectatorpublishing.github.io/nsopCampusMap/" frameBorder="0" scrolling="no" />
          <MobileMainImage src="https://cds-static-hosting.s3.amazonaws.com/NSOP-ILLO.jpg" />
          <a href="https://212west72.com/the-building?utm_source=ColumbiaSpectator&utm_medium=columbiaspectator&utm_campaign=Columbia%20Spectator%20Banners" target="_blank">
            <Ad src="https://s0.2mdn.net/10483125/212W72_061521_300x600.gif"></Ad>
        </a>
        </FirstFold> */}
        <a href="https://212west72.com/the-building?utm_source=ColumbiaSpectator&utm_medium=columbiaspectator&utm_campaign=Columbia%20Spectator%20Banners" target="_blank">
            <MobileAd src="https://s0.2mdn.net/10483125/212W72_061521_300x600.gif"></MobileAd>
        </a>
        {sectionNames.map((sectionName, index) => (
            <Section key={sectionName} sectionName={sectionName} index={index} />
        ))}
        <StaffCredits></StaffCredits>
    </div>
  );
}

export default App;
