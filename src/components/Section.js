import styled from 'styled-components';
import Header from './SectionHeader';
import ArticleBox from './ArticleBox';
import { Articles } from '../data/ArticleData';

const Wrapper = styled.div`
    margin: 3rem 5rem;
`;

const ArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Section = ({sectionName}) => {
    return (
        <Wrapper id={sectionName.toLowerCase()}>
            <Header title={sectionName} />
            <ArticleWrapper>
                {
                    Articles[sectionName].map(article => (
                        <ArticleBox title={article.title} author={article.author} imgLink={article.imgLink} link={article.link} />
                    ))
                }
            </ArticleWrapper>
        </Wrapper>
    )
};

export default Section;