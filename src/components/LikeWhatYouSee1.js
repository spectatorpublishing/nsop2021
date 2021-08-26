import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #E0E2DC;
    display: flex;
    width: 70%;
    margin-left: 18rem;
    padding: 2rem;
    margin-top: 2rem;
`;

const MainText = styled.div`
    text-transform: uppercase;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    width: 35%;
    font-size: 1.5rem;
`;

const Paragraph = styled.div`
    font-family: 'Amiko', sans-serif;
    width: 65%;
    margin-top: 5px;
    font-size: 0.875rem;

    a {
        color: black;
    }
`;

const LikeWhatYouSee1 = () => {
    return (
        <Wrapper>
            <MainText>Like What You See?</MainText>
            <Paragraph>
                This website was created entirely by our tech and product design teams <a href="http://www.specpublishing.com/join">here</a> at Spectator.
                Curious to see how it's done? Interested in doing this work yourself?
                Click here to learn how to join our team.
            </Paragraph>
        </Wrapper>
    )
};

export default LikeWhatYouSee1;