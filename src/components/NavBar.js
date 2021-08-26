import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: space-between;
`;

const Header = styled.div`
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
`;

const SubHeader = styled.h4`
    font-family: 'Amiko', sans-serif;
    font-size: 1rem;
`;

const Logo = styled.img`
    width: 15rem;
`;

const NavBar = () => {
    return (
        <Wrapper>
            <div>
                <Header>Welcome to Columbia</Header>
                <SubHeader>Select an option below to find out more about your orientation guide.</SubHeader>
            </div>
            <div>
                <a href="https://www.columbiaspectator.com/">
                    <Logo src="https://cds-archives.s3.amazonaws.com/pb/resources/img/spectator-logo.png"></Logo>
                </a>
            </div>
        </Wrapper>
    )
};

export default NavBar;