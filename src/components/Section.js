import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import ArticleBox from './ArticleBox';
import { Articles } from '../data/ArticleData';

const Wrapper = styled.div`
    margin: 8rem 0;
`;

const ArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0rem 5rem;
`;

const defaultSectionHeaderSvg = [
    "https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Student+Life+-+Left.svg",
    "https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Student+Life+-+Right.svg"
]

const Section = ({sectionName}) => {
    return (
        <Wrapper>
            <SectionHeader
                title={sectionName}
                leftSvg={defaultSectionHeaderSvg[0]}
                rightSvg={defaultSectionHeaderSvg[1]}
            />
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