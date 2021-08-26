import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: 'Noto Sans', sans-serif;
`;

const Header = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
`;

const SubHeader = styled.h4`
    font-family: 'Noto Sans', sans-serif;
`;

const NavBar = () => {
    return (
        <Wrapper>
            <div>
                <Header>Welcome to Columbia</Header>
                <SubHeader>Select an option below to find out more about your orientation guide.</SubHeader>
            </div>
            <div>
                
            </div>
        </Wrapper>
    )
};

export default NavBar;