import styled from 'styled-components';

export default function SectionHeader({ title }) {
    return (
        <WrapLogo>
            <Header>{title}</Header>
        </WrapLogo>
    );
}

const Header = styled.h2`
    color: #312D9C;
    font-family: "Passion One";
    font-size: 55px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.2px;
    text-transform: uppercase;

`;

const WrapLogo = styled.div`

`;



// import { useState } from 'react';
// import styled from 'styled-components';
// import { device } from '../device';


// export default function SectionHeader({ title, leftSvg, rightSvg }) {
//     /*
//      * To align the center of the header text with the svg line, we
//      *  1. align the top of the svg and the header
//      *  2. shift the header upwards by (headerHeight - svgLineHeight) * 50%
//      * 
//      * To dynamically obtain the height of svg line, we leverage the onLoad
//      * event on the image element. React effect hooks is NOT a good idea here,
//      * because when it gets called after inital render, the image element
//      * probably hasn't been loaded and the browser doesn't know the image
//      * dimensions.
//     */
//     const [svgHeight, setHeight] = useState(0)
//     const handleSvgLoad = (event) => setHeight(event.target.clientHeight)

//     return (
//         <WrapLogo>
//             <LeftSVG onLoad={handleSvgLoad} src={leftSvg} />
//             <Header svgHeight={svgHeight}>{title}</Header>
//             <RightSVG src={rightSvg} />
//         </WrapLogo>
//     )
// }


// const Header = styled.h2`
//     font-family: 'Noto Sans', sans-serif;
//     margin: 0 1em;
//     transform: translateY(calc(-1 * (100% - ${props => props.svgHeight}px) * 0.5));
// `;

// const WrapLogo = styled.div`
//     display: flex;
//     align-items: start;
// `;

// const LeftSVG = styled.img``;

// const RightSVG = styled.img`
//     display: none;
    
//     @media ${device.tablet} {
//         display: block;
//     }
// `;