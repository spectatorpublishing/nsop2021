import styled from 'styled-components';
import { device } from '../device';

const Highlights = () => {
    return (
        <BigWrap>
            <Wrapper>
                <TopRow>
                    <TopLeft src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Course+We+Loved+-+Top+Left.svg"></TopLeft>
                    <TextFilled><a href="https://www.columbiaspectator.com/spectrum/2021/08/28/116-columbia-traditions/" target="_blank">116 Traditions</a></TextFilled>
                    <TopRight src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Courses+We+Loved+-+Top+Right.svg"></TopRight>
                </TopRow>
                <Center src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Courses+We+Loved+-+Center.svg"></Center>
                <BottomRow>
                    <BottomLeft src="https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Courses+We+Loved+-+Bottom+Left.svg"></BottomLeft>
                    <div>
                        <Text>Sign up for the <a href="http://columbiaspectator.us4.list-manage.com/subscribe/post?u=a3d2eeb1ae5560ca04f82f042&id=e51c51d62d">wake up call</a>, our daily newspaper</Text>
                        <Text>Listen to our <a href="https://www.columbiaspectator.com/podcasts/">podcast miniseries</a></Text>
                    </div>
                </BottomRow>
            </Wrapper>
            <a href="https://orenscoffee.com/">
                <Ad src="https://cds-static-hosting.s3.amazonaws.com/Columbia_Orens-300x600.jpg" />
            </a>
        </BigWrap>
    )
};

export default Highlights;

const BigWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans', sans-serif;
    margin: 2rem 0rem 1rem 0rem;
`;

const Ad = styled.img`
  margin: 0 2rem;
`;

const TextFilled = styled.h2`
    cursor: pointer;
    background: #FFFFFF;
    padding: 1rem;
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    margin: auto 0rem auto 0rem;
    font-size: 2rem;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 650px) {
        font-size: 0.8rem;
        padding: 0.5rem;
    }

    @media (max-width: 375px) {
        font-size: 0.5rem;
        padding: 0.5rem;
    }

    :hover {
        background: lightgrey;
    }

    a {
        color: black;
        text-decoration: none !important;
    }
`;

const Text = styled.h2`
    padding: 1rem;
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    margin: 1.5rem 0rem 1.5rem 0rem;

    a {
        text-decoration: none;
        color: #4266E3;
    }

    @media (max-width: 1024px) {
        font-size: 1rem;
        margin: 0rem;
    }

    @media (max-width: 650px) {
        font-size: 0.8rem;
        padding: 0.2rem;
        padding-left: 0.8rem;
        margin: 0rem 0rem 0rem 0rem;
    }

    @media (max-width: 425px) {
        margin-right: 1rem;
    }

    @media (max-width: 375px) {
        font-size: 0.5rem;
        padding: 0.5rem;
    }
`;

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const TopLeft = styled.img`
    width: 240.5px;
    margin-right: -5rem;
    margin-top: -5rem;

    @media (max-width: 1024px) {
        width: 150px;
        margin-top: -4rem;
    }

    @media (max-width: 650px) {
        width: 89px;
        margin-right: -3rem;
        margin-top: -2.7rem;
    }

    @media (max-width: 375px) {
        width: 60px;
        margin-right: -2rem;
        margin-top: -2rem;
    }
`;

const TopRight = styled.img`
    width: 544.5px;
    margin-top: 4rem;

    @media (max-width: 1024px) {
        width: 340px;
        margin-top: 3rem;
    }
    
    @media (max-width: 650px) {
        width: 180px;
        margin-top: 1.5rem;
    }
`;

const Center = styled.img`
    width: 1003.5px;
    margin-top: -0.7rem;

    @media (max-width: 1024px) {
        width: 625px;
        margin-top: -0.3rem;
    }

    @media (max-width: 650px) {
        margin-top: -0.1rem;
        width: 400px;
    }

    @media (max-width: 375px) {
        margin-top: -0.1rem;
        width: 330px;
    }
`;

const BottomLeft = styled.img`
    height: 97.5px;
    margin: auto 0rem auto 0rem;

    @media (max-width: 1024px) {
        height: 60.7px;
    }

    @media (max-width: 650px) {
        height: 40px;
    }

    @media (max-width: 375px) {
        height: 30px;
    }
`;

const BottomRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -4rem;
    margin-left: 6rem;

    @media (max-width: 1024px) {
        margin-top: -2rem;
        margin-left: 2rem;
    }

    @media (max-width: 650px) {
        margin-top: -1rem;
        margin-left: 1rem;
        margin-right: 15rem;
    }

    @media (max-width: 580px) {
        margin-right: 10rem;
    }

    @media (max-width: 425px) {
        margin-right: 0rem;
    }
`;