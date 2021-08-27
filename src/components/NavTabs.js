import styled from 'styled-components';

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const Link = styled.a`
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    margin: 0.5rem 0;
    text-decoration: none;
    color: black;
    font-weight: 500;
`;

const ExploreButton = styled.a`
    margin: 0.5rem 0;
    background-color: #D37462;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: fit-content;
    font-weight: 600;
`;

const JoinButton = styled.a`
    margin: 0.5rem 0;
    background-color: #8B9696;
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: fit-content;
    color: white;
    font-weight: 600;
`;

const NavTabs = () => {
    return (
        <NavWrapper>
            <Link href="#">Home</Link>
            <Link href="#covid-19">Covid-19</Link>
            <Link href="#student-life">Student Life</Link>
            <Link href="#academics">Academics</Link>
            <Link href="#city">City</Link>
            <ExploreButton href="https://lionclubs.info/" target="_blank">Explore Clubs</ExploreButton>
            <JoinButton href="http://www.specpublishing.com/join" target="_blank">Join Spec</JoinButton>
        </NavWrapper>
    )
}

export default NavTabs;