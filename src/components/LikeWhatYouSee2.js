import styled from 'styled-components';

const BigWrap = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Noto Sans', sans-serif;
    padding: 2rem;
    background: #FFFFFF;
    padding-left: 8rem;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 2rem;
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
    margin-bottom: -1rem;
    margin-block-end: 0;
    text-transform: uppercase;
    display: flex;
`;

const Text = styled.p`
    font-family: 'Amiko', sans-serif;
    font-size: 0.875rem;
`;

const LeftSVG = styled.img`
`;

const RightSVG = styled.img`
    margin-top: -9rem;
`;

const HeaderText = styled.div`
    margin: 0 2rem;
    margin-top: -0.6rem;
`;

const LikeWhatYouSee2 = () => {
    return (
        <BigWrap>
            <Header>
                <LeftSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Spectator+Staff+-+Left.svg"></LeftSVG>
                <HeaderText>Spectator Staff</HeaderText>
                <RightSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Spectator+Staff+-+Right.svg"></RightSVG>
            </Header>
            <Wrapper>
                <Content>
                    <Header>Like what you see?</Header>
                    <SubContent>
                        <Text>This website was created entirely by our tech and product design teams here at Spectator.</Text>
                        <Text>Curious to see how it's done? Interested in doing this work yourself?</Text>
                    </SubContent>
                    <a href="http://www.specpublishing.com/join">
                        <JoinButton>Join Spec</JoinButton>
                    </a>
                </Content>
                <Credits>
                    <Header>Cover Art By:</Header>
                    <Header>Website Design By:</Header>
                    <Header>Developers:</Header>
                </Credits>
            </Wrapper>
        </BigWrap>
    )
};

export default LikeWhatYouSee2;