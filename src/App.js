import styled from 'styled-components';

import NavBar from './components/NavBar';
import NavTabs from './components/NavTabs';
import LikeWhatYouSee1 from './components/LikeWhatYouSee1';
import Section from './components/Section';

const FirstFold = styled.div`
  display: flex;
`;

const MainImage = styled.img`
  width: 75%;
`;

function App() {
  return (
    <div className="App">
        <NavBar />
        <FirstFold>
          <NavTabs />
          <MainImage src="https://cds-static-hosting.s3.amazonaws.com/NSOP-ILLO.png"></MainImage>
          {/* <ins class='dcmads' style={{'display':'inline-block', 'width' :'300px', 'height':'600px'}}
              data-dcm-placement='N46002.2636903COLUMBIASPECTATOR/B25105622.312005458'
              data-dcm-rendering-mode='script'
              data-dcm-https-only
              data-dcm-gdpr-applies='gdpr=${GDPR}'
              data-dcm-gdpr-consent='gdpr_consent=${GDPR_CONSENT_755}'
              data-dcm-addtl-consent='addtl_consent=${ADDTL_CONSENT}'
              data-dcm-ltd='false'
              data-dcm-resettable-device-id=''
              data-dcm-app-id=''>
          </ins> */}
        </FirstFold>
        <LikeWhatYouSee1 />
        <Section sectionName="Academics" />
        <Section sectionName="Covid-19" />
        <Section sectionName="Student Life" />
        <Section sectionName="Explore Housing" />
    </div>
  );
}

export default App;
