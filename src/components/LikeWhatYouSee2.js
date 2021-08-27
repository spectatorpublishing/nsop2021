import styled from 'styled-components';
import { device } from '../device';

const BigWrap = styled.div`
    margin-top: 3rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Noto Sans', sans-serif;
    padding: 2rem;
    background: #FFFFFF;
    padding-left: 8rem;
    position: relative;
    margin-top: -4rem;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 2rem;
        margin-top: 0;
    }
`;

const Content = styled.div`
    margin-right: 3rem;

    a {
        text-decoration: none;
    }

    @media (max-width: 768px) {
        margin-right: 0rem;
    }
`;

const SubContent = styled.div`
    margin: 2rem 0rem 2rem 0rem;
`;

const Credits = styled.div`
    margin-left: 3rem;

    @media (max-width: 768px) {
        margin-left: 0rem;
        margin-top: 2rem;
    }
`;

const JoinButton = styled.div`
    background: #D37462;
    padding: 0.7rem;
    border-radius: 5px;
    color: #FFFFFF;
    width: fit-content;
    margin: 1rem auto 1rem 0rem;
    text-transform: uppercase;
    font-weight: 600;
`;

const Header = styled.h2`
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0;
    margin-block-end: 0;
    text-transform: uppercase;
`;

const InnerCredits = styled.span`
    font-weight: 400;
    text-transform: capitalize;
`;

const Header1 = styled.div`
    display: flex;
    font-weight: 600;
    margin-top: 2rem;
    margin-block-end: 0;
    text-transform: uppercase;
    margin-top: 2rem;
    padding-bottom: 1rem;
    margin-block-end: 0;
    font-size: 1.5rem;
    padding-left: 1rem;

    @media ${device.tablet} {
        margin-bottom: -1rem;
        padding-left: 40%;

    }
`;

const Text = styled.p`
    font-family: 'Amiko', sans-serif;
    font-size: 0.875rem;
`;

const LeftSVG = styled.img`
    display: none;

    @media ${device.tablet} {
        display: block;
    }
`;

const RightSVG = styled.img`
    margin-top: 0rem;

    @media ${device.tablet} {
        margin-top: -8.5rem;
    }
`;

const HeaderText = styled.div`
    margin: 0;
    padding-right: 0.5rem;

    @media ${device.tablet} {
        padding-right: 0;
        margin: 0 2rem;
        margin-top: -0.6rem;
    }
`;

const LikeWhatYouSee2 = () => {
    return (
        <BigWrap>
            <Header1>
                <LeftSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Spectator+Staff+-+Left.svg"></LeftSVG>
                <HeaderText>Spectator Staff</HeaderText>
                <RightSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Spectator+Staff+-+Right.svg"></RightSVG>
            </Header1>
            <Wrapper>
                <Content>
                    <Header>Like what you see?</Header>
                    <SubContent>
                        <Text>This website was created entirely by our tech and product design teams here at Spectator.</Text>
                        <Text>Curious to see how it's done? Interested in doing this work yourself?</Text>
                    </SubContent>
                    <a href="http://www.specpublishing.com/join" target="_blank">
                        <JoinButton>Join Spec</JoinButton>
                    </a>
                </Content>
                <Credits>
                    <Header>Cover Art By: <InnerCredits>Noelle Hunter</InnerCredits></Header>
                    <Header>Website Design By: <InnerCredits>Christina Su and Cindy Espinosa</InnerCredits></Header>
                    <Header>Developers: <InnerCredits>Erin McNulty, Laura Castro Venegas, Francesca Cavuoti, Yu-Chen Huang, and Yunlan Li</InnerCredits></Header>
                </Credits>
            </Wrapper>
        </BigWrap>
    )
};

export default LikeWhatYouSee2;