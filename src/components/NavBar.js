import styled from 'styled-components';
import { device } from '../device';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;

    @media ${device.mobile} {
        flex-direction: row;
    }
`;

const Header = styled.div`
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    margin: 2rem;
    margin-top: 0;
    font-size: 1.75rem;

    @media ${device.mobile} {
        font-size: 2.5rem;
        margin: 2rem;
    }
`;

const SubHeader = styled.div`
    font-family: 'Amiko', sans-serif;
    margin-top: 0;
    padding-left: 2rem;

    @media ${device.mobile} {
        margin-top: -6rem;
    }
`;

const Logo = styled.img`
    float: right;
    width: 85vw;

    @media ${device.mobile} {
        width: 15rem;
    }
`;

const WrapLogo = styled.div`
    display: flex;
`;

const LeftSVG = styled.img`
    margin-top: -5rem;
    display: none;

    @media ${device.mobile} {
        display: block
    }
`;

const RightSVG = styled.img`
    margin-top: 3.5rem;
    display: none;

    @media ${device.mobile} {
        display: block;
    }
`;

const UnderSVG = styled.img`
    margin-top: 1.25rem;
`;

const MainImage = styled.img`
  width: 60%;
  display: none;

  @media ${device.mobile} {
    display: block;
  }
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
                {/* <MainImage src="https://cds-static-hosting.s3.amazonaws.com/NSOP-ILLO.png"></MainImage> */}
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