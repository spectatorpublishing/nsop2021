import styled from  'styled-components';
import { device } from '../device';

const Wrap = styled.a`
    background-color: white;
    width: 40rem;
    align-items: center;
    border-radius: 10px;
    margin: 1rem;
    color: black;
    text-decoration: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    @media ${device.tablet} {
        width: 27.5%;
        margin: 2rem;
    }
`;

const Image = styled.img`
    width: 100%;
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px;
    max-height: 15rem;
    overflow: hidden;
    object-fit: cover;
`;

const Title = styled.div`
    padding: 1rem;
    padding-bottom: 0;
    color: #000;
    font-family: Bitter;
    font-style: normal;
    font-weight: 500;
    line-height: normal;    
`;

const Authors = styled.div`
    font-size: 0.75rem;
    padding: 1rem;
    color: #000;
    font-family: Bitter;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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