import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import ArticleBox from './ArticleBox';
import { Articles } from '../data/ArticleData';
import { device } from '../device';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${props => props.isEven ? '#EBF0F5' : 'white'}; // Alternating background color
    @media ${device.tablet} {
       padding: 2rem 0;
    }
`;

const ArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    gap: 1rem;

    @media (max-width: ${device.tablet}) {
        padding: 0 1rem;
        gap: 1rem;
    }
`;

const Section = ({ sectionName, index }) => {
    return (
        <Wrapper id={sectionName.toLowerCase().split(" ").join("-")} isEven={index % 2 === 1}>
            <SectionHeader title={sectionName} />
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


// import styled from 'styled-components';
// import SectionHeader from './SectionHeader';
// import ArticleBox from './ArticleBox';
// import { Articles } from '../data/ArticleData';
// import { device } from '../device';

// const Wrapper = styled.div`
//     margin-top: 3rem;

//     @media ${device.tablet} {
//         margin: 8rem 0;
//         margin-bottom: 0;
//     }
// `;

// const ArticleWrapper = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0rem 1rem;

//     @media ${device.tablet} {
//         margin: 0rem 5rem;
//         margin-top: -3rem;
//     }
// `;

// const defaultSectionHeaderSvg = [
//     "https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Student+Life+-+Left.svg",
//     "https://cds-static-hosting.s3.amazonaws.com/nsop2021svgs/Student+Life+-+Right.svg"
// ]

// const Section = ({sectionName}) => {
//     return (
//         <Wrapper id={sectionName.toLowerCase().split(" ").join("-")}>
//            <SectionHeader
//                 title={sectionName}
//                 leftSvg={defaultSectionHeaderSvg[0]}
//                 rightSvg={defaultSectionHeaderSvg[1]}
//             />
//             <ArticleWrapper>
//                 {
//                     Articles[sectionName].map(article => (
//                         <ArticleBox title={article.title} author={article.author} imgLink={article.imgLink} link={article.link} />
//                     ))
//                 }
//             </ArticleWrapper>
//         </Wrapper>
//     )
// };

// export default Section;