import styled from 'styled-components';
import { device } from '../device';


const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 2rem;

    @media ${device.tablet} {
        flex-direction: column;
    }
`;

const Link = styled.a`
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    margin: 0.5rem 0rem;
    text-decoration: none;
    color: black;
    font-weight: 500;

    background: #C9CAA7;
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 7rem;


    :hover {
        filter: brightness(0.6);
    }

    @media ${device.tablet} {
        margin: 0.5rem 0;
        background: none;
        padding: 0;
        :hover {
            filter: none;
        }
    }
`;

const ExploreButton = styled.a`
    margin: 0.5rem 0rem;
    background-color: #D37462;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 7rem;
    font-weight: 600;
    :hover {
        filter: brightness(0.6);
    }

    @media ${device.tablet} {
        margin: 0.5rem 0;
    }
`;

const JoinButton = styled.a`
    margin: 0.5rem 0rem;
    background-color: #8B9696;
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 7rem;
    color: white;
    font-weight: 600;
    :hover {
        filter: brightness(0.6);
    }

    @media ${device.tablet} {
        margin: 0.5rem 0;
    }
`;

const NavTabs = () => {
    return (
        <NavWrapper>
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