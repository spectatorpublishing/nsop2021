import styled from 'styled-components';

const BigWrap = styled.div`
    display: flex;
    margin-top: -1rem;
`;

const Wrapper = styled.div`
    background-color: #E0E2DC;
    display: flex;
    padding: 2rem;
    margin: 3rem;
    height: fit-content;
    border-radius: 5px;

    a {
        text-decoration: none;
    }

    @media (max-width: 425px) {
        margin-right: 0rem;
        flex-direction: column;
    }
`;

const Paragraph = styled.div`
    font-family: 'Amiko', sans-serif;
    width: 80%;
    font-size: 0.875rem;

    a {
        color: black;
    }

    @media (max-width: 425px) {
        width: fit-content;
        margin-top: 10px;
    }
`;

const ClubsButton = styled.div`
    background: #D37462;
    padding: 0.7rem;
    border-radius: 5px;
    color: #FFFFFF;
    width: fit-content;
    height: fit-content;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    justify-self: end;
`;

const ExploreClubs = () => {
    return (
        <BigWrap>
            <Wrapper>
                <Paragraph>
                Have a hobby? Want to continue pursuing a passion? Looking for 
                a specific group or activity? We have you covered! Find clubs 
                and student organizations that interest you through LionClubs, 
                Spectator’s newest platform created by our own product and 
                engineering teams.
                </Paragraph>
                <a href="http://www.lionclubs.info">
                    <ClubsButton>Visit LionClubs</ClubsButton>
                </a>
            </Wrapper>
        </BigWrap>
    )
};

export default ExploreClubs;