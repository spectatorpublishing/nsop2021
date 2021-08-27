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
            <Link href="#">Academics</Link>
            <Link href="#">Covid-19</Link>
            <Link href="#">Student Life</Link>
            <Link href="#">Explore Housing</Link>
            <ExploreButton href="#">Explore Clubs</ExploreButton>
            <JoinButton href="#">Join Spec</JoinButton>
        </NavWrapper>
    )
}

export default NavTabs;