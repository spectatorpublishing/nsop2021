import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Header = styled.div`
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 2rem;
`;

const SubHeader = styled.div`
    font-family: 'Amiko', sans-serif;
    margin-top: -6rem;
    padding-left: 2rem;
`;

const Logo = styled.img`
    width: 15rem;
`;

const WrapLogo = styled.div`
    display: flex;
`;

const LeftSVG = styled.img`
    margin-top: -5rem;
`;

const RightSVG = styled.img`
    margin-top: 3.5rem;
`;

const UnderSVG = styled.img`
    margin-top: 1.25rem;
`;

const NavBar = () => {
    return (
        <Wrapper>
            <div>
                <WrapLogo>
                    <LeftSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Welcome+to+Columbia+-+Left.svg" />
                    <Header>Welcome to Columbia</Header>
                    <RightSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Welcome+To+Columbia+-+Right.svg" />
                </WrapLogo>
                <SubHeader>Select an option below to find out more about your orientation guide.</SubHeader>
                <UnderSVG src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Welcome+to+Columbia+-+Under.svg" />
            </div>
            <div>
                <a href="https://www.columbiaspectator.com/">
                    <Logo src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Top+Corner+Lines.svg"></Logo>
                </a>
            </div>
        </Wrapper>
    )
};

export default NavBar;