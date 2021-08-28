import styled from  'styled-components';
import { device } from '../device';

const Wrap = styled.a`
    background-color: white;
    width: 40rem;
    border-radius: 5px;
    margin: 1rem;
    color: black;
    text-decoration: none;

    @media ${device.tablet} {
        width: 27.5%;
        margin: 2rem;
    }
`;

const Image = styled.img`
    width: 100%;
    max-height: 15rem;
    overflow: hidden;
    object-fit: cover;
`;

const Title = styled.div`
    padding: 1rem;
    padding-bottom: 0;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
`;

const Authors = styled.div`
    font-family: 'Amiko', sans-serif;
    font-size: 0.75rem;
    padding: 1rem;
`;

const ArticleBox = ({imgLink, link, title, author}) => {
    return (
        <Wrap href={link} target="_blank">
            <Image src={imgLink}></Image>
            <Title>{title}</Title>
            <Authors>By {author}</Authors>
        </Wrap>
    )
};

export default ArticleBox;