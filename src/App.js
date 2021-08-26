import styled from 'styled-components';

import NavBar from './components/NavBar';
import NavTabs from './components/NavTabs';
import LikeWhatYouSee1 from './components/LikeWhatYouSee1';

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
        </FirstFold>
        <LikeWhatYouSee1 />
    </div>
  );
}

export default App;
