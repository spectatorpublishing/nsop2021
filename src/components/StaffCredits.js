import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { credits } from '../data/Credits';

const Wrapper = styled.div`
    background-color: #D37462;
    padding: 2rem 0 2rem 0;

    @media only screen and (max-width: 800) {
        padding: 1rem 0 1rem 0;
    }
`;

const Direction = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Noto Sans', Calibri, sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 500;
    
    h2 {
        font-family: 'Noto Sans', Calibri, sans-serif;
        font-weight: 600;
        font-size: 24px;
        text-transform: uppercase;
        margin: 0;

        @media only screen and (max-width: 425px) {
            font-size: 16px;
        }
    }
    
    @media only screen and (max-width: 800px) {
        padding: 0 2rem 0rem 2rem;
    }

    @media only screen and (max-width: 425px) {
        font-size: 14px;
        justify-content: flex;
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;

    @media only screen and (max-width: 1370px) {
        margin: 2rem 0 0 2rem ;
    }

    @media only screen and (max-width: 1270px) {
        margin: 2rem;
    }

    @media only screen and (max-width: 920px) {
        margin: 2rem 0 0 2rem ;
    }

    @media only screen and (max-width: 800px) {
        margin: 0;
    }
`;

const Box = styled.div`
    text-align: left;
    border-style: solid;
    border-width: 5px;
    border-radius: 5px;
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 2rem 0;

    @media only screen and (max-width: 800px) {
        text-align: left;
        margin: 1rem 0 0 0;
    }
`;

const Title = styled.div`
    font-family: 'Noto Sans', Calibri, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    color: white;
    text-transform: uppercase;
    text-align: center;

    @media only screen and (max-width: 425px) {
        font-size: 2rem;
    }
`;

const CreditsList = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    if (width < 800){
        return (
            <Wrapper>
                <Text>
                    <Title>Staff</Title>
                    <Column>
                        {Object.keys(credits).map(section => (
                            <Box>
                                <h2>{section}</h2>
                                {credits[section].map(person => (
                                    <p>{person.name}, <i>{person.position}</i></p>
                                ))}
                            </Box>
                        ))}
                    </Column>
                </Text>
            </Wrapper>
        );
    } else if (width >= 800 && width < 1270){
        return (
            <Wrapper>
                <Title>Staff</Title>
                <Text>
                    <Direction>
                    <Column>
                        {["Corporate Board", "News", "Opinion", "Copy", "Graphics", "Photo", "Product Design", "Newsroom Development"].map(section => (
                            <Box>
                                <h2>{section}</h2>
                                {credits[section].map(person => (
                                    <p>{person.name}, <i>{person.position}</i></p>
                                ))}
                            </Box>
                        ))}
                    </Column>
                    <Column>
                        {["Sports", "A&E", "Illustrations", "Podcasts", "Spectrum", "Engagement", "Engineering", "Revenue"].map(section => (
                            <Box>
                                <h2>{section}</h2>
                                {credits[section].map(person => (
                                    <p>{person.name}, <i>{person.position}</i></p>
                                ))}
                            </Box>
                        ))}
                    </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Title>Staff</Title>
                <Text>
                    <Direction>
                    <Column>
                        {["Corporate Board", "News", "Copy", "Graphics", "Photo"].map(section => (
                            <Box>
                                <h2>{section}</h2>
                                {credits[section].map(person => (
                                    <p>{person.name}, <i>{person.position}</i></p>
                                ))}
                            </Box>
                        ))}
                    </Column>
                    <Column>
                        {["Sports", "A&E", "Illustrations", "Podcasts", "Engagement"].map(section => (
                            <Box>
                                <h2>{section}</h2>
                                {credits[section].map(person => (
                                    <p>{person.name}, <i>{person.position}</i></p>
                                ))}
                            </Box>
                        ))}
                    </Column>
                    <Column>
                        {["Engagement", "Engineering", "Opinion", "Product Design", "Newsroom Development", "Revenue", "Spectrum"].map(section => (
                            <Box>
                                <h2>{section}</h2>
                                {credits[section].map(person => (
                                    <p>{person.name}, <i>{person.position}</i></p>
                                ))}
                            </Box>
                        ))}
                    </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    }
};

export default CreditsList;