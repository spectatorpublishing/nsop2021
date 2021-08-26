import styled from  'styled-components';

const Wrap = styled.a`
    background-color: white;
    width: 27.5%;
    border-radius: 5px;
    margin: 2rem;
    color: black;
    text-decoration: none;
`;

const Image = styled.img`
    width: 100%;
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
        <Wrap href="">
            <Image src={imgLink}></Image>
            <Title>{title}</Title>
            <Authors>By {author}</Authors>
        </Wrap>
    )
};

export default ArticleBox;