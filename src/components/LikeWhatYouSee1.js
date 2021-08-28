import styled from 'styled-components';
import { device } from '../device';


const BigWrap = styled.div`
    display: flex;
    margin-top: -1rem;
`;

const Wrapper = styled.div`
    background-color: #E0E2DC;
    display: flex;
    margin-right: 2rem;
    margin-left: -5rem;
    padding: 2rem;
    margin-top: 4rem;
    height: fit-content;

    @media (max-width: 425px) {
        margin-left: 0;
        margin-right: 0rem;
        flex-direction: column;
    }
`;

const MainText = styled.div`
    text-transform: uppercase;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    width: 35%;
    font-size: 1.5rem;

    @media (max-width: 425px) {
        font-size: 1rem;
        width: fit-content;
    }
`;

const Lines = styled.img`
    display: none;

    @media ${device.tablet} {
        display: block;
    }
`;

const Paragraph = styled.div`
    font-family: 'Amiko', sans-serif;
    width: 65%;
    margin-top: 5px;
    font-size: 0.95rem;

    a {
        color: black;
    }

    @media (max-width: 425px) {
        width: fit-content;
        margin-top: 10px;
    }
`;

const LikeWhatYouSee1 = () => {
    return (
        <BigWrap>
            <Lines src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Like+What+You+See.svg" />
            <Wrapper>
                <MainText>Like What You See?</MainText>
                <Paragraph>
                    This website was created entirely by our tech and product design teams <a href="http://www.specpublishing.com/join" target="_blank">here</a> at Spectator.
                    Curious to see how it's done? Interested in doing this work yourself?
                    Click here to learn how to join our team.
                </Paragraph>
            </Wrapper>
        </BigWrap>
    )
};

export default LikeWhatYouSee1;